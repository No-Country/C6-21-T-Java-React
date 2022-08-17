import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

//components
import CartWidget from '../CartWidget/CartWidget';


const Header = () => {
  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Nav className="me-auto">
          <Nav.Link><Link to="/">HOME</Link></Nav.Link>
          <Nav.Link><Link to="/products">PRODUCTS</Link></Nav.Link>
          <Nav.Link>CATEGORY ONE</Nav.Link>
          <Nav.Link>CATEGORY TWO</Nav.Link>
        </Nav>
        <Navbar.Brand>
          <Nav.Link><Link to="/cart"><CartWidget/></Link></Nav.Link>
          
        </Navbar.Brand>
      </Container>
    </Navbar>
    
  );
}

export default Header;