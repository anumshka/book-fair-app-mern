import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} varient='top' />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <h4>{product.name}</h4>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} Reviews
          </div>
        </Card.Text>

        <Card.Text as='h4'>Rs.{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
