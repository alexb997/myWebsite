import { Container } from "react-bootstrap";

function Header() {
  return (
    <section className="header d-flex align-items-center justify-content-center">
      <Container fluid>
        <h1>Bună, sunt Bîlă Alexandru.</h1>
        <h2>Un programator curios axat pe java si javascript.</h2>
        <p>În continuă aspirație spre mai bine.</p>
      </Container>
    </section>
  );
}

export default Header;
