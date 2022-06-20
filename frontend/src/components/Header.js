import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Book-Fair</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/cart' style={{ color: 'black' }}>
              <i className='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
            <Nav.Link href='/sign-in' style={{ color: 'black' }}>
              <i className='fas fa-user'></i>SIGN-IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
