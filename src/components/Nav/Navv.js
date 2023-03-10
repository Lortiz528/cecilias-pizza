//import logo from './ceciliasLogo.png';
import newLogo from './newLogo.png'
import './Nav.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Navv() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-whole">
      <Container>
        <Navbar.Brand href="/">
          <img src={newLogo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >
              <Link
              className='navlink'
                activeClass="active"
                to="menuSection"
                spy={true}
                smooth={true}
              >
                <strong>Menu</strong>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
              className='navlink'
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
              >
                <strong>Contact</strong>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;
