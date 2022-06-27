import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config({ path: '../../.env' })

const stripe = new Stripe(
  'sk_test_51LEItmSIYhPb3Chalu3t8InzpVfUxUIb0qoajh8HQSI00TfC3fNTOyMW5nkPAaz4HamlAxW9YbtyhwZAOicfMNzI00rg6sf7Ad'
)

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order items')
    return
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      totalPrice,
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }
})

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

//endpoint for updating the order as 'paid'
// @desc    Update order to paid
// @route   GET /api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)

  if (order) {
    //it was false by default
    order.isPaid = true
    order.paidAt = Date.now()
    //from the stripe response
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      email_address: req.body.receipt_email,
    }

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
})

// @desc  create payment intent for stripe payment
// @route POST /api/orders/stripe-payment
// @access PUBLIC
const stripePayment = asyncHandler(async (req, res) => {
  const { price, email } = req.body
  // Need to create a payment intent according to stripe docs
  // https://stripe.com/docs/api/payment_intents
  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: 'inr',
    receipt_email: email,
    payment_method_types: ['card'],
  })

  // send this payment intent to the client side
  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

export { addOrderItems, getOrderById, updateOrderToPaid, stripePayment }
