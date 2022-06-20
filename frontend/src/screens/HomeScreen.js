import React from 'react'
import products from '../products'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
const HomeScreen = () => {
  return (
    <>
      {/* loop through all the products */}

      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product}></Product>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
