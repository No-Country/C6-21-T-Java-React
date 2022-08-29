import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

function NavbarComponent() {
  return (
    <>
      <Navbar bg='dark' variant = 'dark' sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand className='logo-brand'>          
              <Nav.Link href='/'><FontAwesomeIcon icon={faMountain} className='icon-hat'></FontAwesomeIcon>Andes</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href='productos'>Productos</Nav.Link>
              <Nav.Link href='cart'>Carrito</Nav.Link>
              <Nav.Link href='vista3'>vista3</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
      </Navbar>
      <Outlet />

    </>
  );
}

export default NavbarComponent;