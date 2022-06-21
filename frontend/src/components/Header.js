import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link to='/'>
          <Navbar.Brand>Book-Fair</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <LinkContainer to='/cart' style={{ color: 'black' }}>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login' style={{ color: 'black' }}>
              <Nav.Link>
                <i className='fas fa-user'></i>SIGN-IN
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
