import { Container, Col, Row } from "react-bootstrap";

function Header() {
  return (
    <section className="d-flex align-items-center">
      <Container className="header ">
        <Row className="justify-content-center">
          <Col className="info-box">
            <h1>Bună, sunt Eu</h1>
            <h2>Un programator curios axat pe java si javascript.</h2>
            <p>În continuă aspirație spre mai bine.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
