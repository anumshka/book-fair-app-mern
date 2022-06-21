import React from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = ({ match }) => {
  // to find the particular product with the id in the url
  const product = products.find((p) => p._id === match.params.id)

  return (
    <>
      <Link className='btn' to='/'>
        {' '}
        back
      </Link>

      <Row>
        {/* first column for the image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>

        {/* second column */}
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>Rs{product.price}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'Available' : 'Not Available'}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button type='button' disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      {/* second row for description */}
      <Row className='my-3'>
        <ListGroup>
          <ListGroup.Item variant='flush'>
            <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </ListGroup.Item>

          <ListGroup.Item>Price : Rs{product.price}</ListGroup.Item>

          <ListGroup.Item>Description : {product.description}</ListGroup.Item>
        </ListGroup>
      </Row>
    </>
  )
}

export default ProductScreen
