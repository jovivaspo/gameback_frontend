import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NavBar.css'
import ModalSign from './ModalSign'


const NavBar = () => {
 
    return (
      <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link className='nav-link' to='/'><img src={process.env.PUBLIC_URL + 'gameback.png'} height={100}/></Link>
          </Nav>
          <Nav>
            <ModalSign/>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </>

       
    )
}

export default NavBar
