import logo from './ceciliasLogo.png';
import './Nav.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function Navv() {
  return (
    <Navbar className='navbar-whole' sticky='top'>
      <Container>
        <Navbar.Brand href="/">
        <img
              src={logo}
              className="logo"
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/menu"><strong>Menu</strong></Nav.Link>
            <Nav.Link href="/contact"><strong>Contact</strong></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;
