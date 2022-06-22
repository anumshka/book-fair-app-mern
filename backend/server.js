import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import colors from 'colors'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('api running')
})

// to get all the products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// to get a particular product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
