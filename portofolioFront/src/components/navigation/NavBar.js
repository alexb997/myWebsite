import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="md"
      variant="dark"
      className="navbar navbar-expand-lg navbar-dark shadow-5-strong"
    >
      <Container>
        <Navbar.Brand href="/">Alex Portofolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="/projects">
              <span>Projects</span>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/#About">
              <span>About</span>
            </Nav.Link>
            <Nav.Link href="/#Contact">
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
