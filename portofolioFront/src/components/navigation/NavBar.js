import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  // return (
  //     <Navbar expand="lg" className="bg-body-tertiary">
  //       <Container>
  //         <Navbar.Brand href="/">Alex Portofolio</Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item href="/projects">Project1</NavDropdown.Item>
        <NavDropdown.Item href="/projects">Project2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/about">About</NavDropdown.Item>
        <NavDropdown.Item href="/about">Contact</NavDropdown.Item>
      </NavDropdown>
      // <Nav.Link href="/projects">Projects</Nav.Link>
      // <Nav.Link href="/projects">Projects</Nav.Link>
      //{" "}
    </Nav>
    //{" "}
  </Navbar.Collapse>;
  //       </Container>
  //     </Navbar>
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Alex Portofolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects">Project1</NavDropdown.Item>
              <NavDropdown.Item href="/projects">Project2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link eventKey={2} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
