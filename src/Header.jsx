import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
function Header() {
  return (
    <div>
       <Navbar className="bg-warning fw-bolder">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <i class="fa-solid fa-cart-arrow-down fa-bounce"></i> 
           E-Cart
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
