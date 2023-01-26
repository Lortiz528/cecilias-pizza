import logo from './ceciliasLogo.png';
import './Nav.scss';
import {Container, Nav, Navbar} from 'react-bootstrap';


function Navv() {
  return (
    <Navbar collapseOnSelect expand="lg"  className="navbar-whole">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/menu">
              <strong>Menu</strong>
            </Nav.Link>
            <Nav.Link href="/contact">
              <strong>Contact</strong>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navv;
