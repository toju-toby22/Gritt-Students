import React from 'react'
import "..//Styling/NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
      <Link className='Link' to="/">  
        <Navbar.Brand clas href="#home">GRITTY STUDENTS</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='pages_links'>
          <Link className='Link' to="/Article_CategoriesPage"> <Navbar.Text>Articles</Navbar.Text> </Link>
          <Link className='Link' to="/PodcastPage"> <Navbar.Text>Podcasts</Navbar.Text> </Link>
          <Link className='Link' to="/"> <Navbar.Text>Articles</Navbar.Text> </Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar