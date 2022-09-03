import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';

function NavbarComponent() {
  return (
    <>
      <Navbar bg='dark' variant = 'dark' sticky='top' expand='lg' collapseOnSelect>
          <Navbar.Brand className='logo-brand'>          
              <Nav.Link href='/'><FontAwesomeIcon icon={faMountain} className='icon-hat'></FontAwesomeIcon>Ariaka</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown title ='Items'>
              <NavDropdown.Item href='productos'>productos</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href='buzos'>buzos</NavDropdown.Item>
              <NavDropdown.Item href='camisas'>camisas</NavDropdown.Item>
              <NavDropdown.Item href='remeras'>remeras</NavDropdown.Item>
              <NavDropdown.Item href='jeans'>jeans</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href='nosotros'>nos</Nav.Link>
              <Nav.Link href='contacto'>contacto</Nav.Link> */}
              <Nav.Link> <Link to="/cart"><CartWidget/></Link></Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
      </Navbar>
      <Outlet />

    </>
  );
}

export default NavbarComponent;