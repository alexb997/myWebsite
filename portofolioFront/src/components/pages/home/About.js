import { Button, Container } from "react-bootstrap";

function About() {
  return (
    <section
      id="About"
      className="about d-flex align-items-center justify-content-center"
    >
      <Container fluid>
        <h2>About</h2>
        <p>About zone still unsure of content</p>

        <div>
          <h2>Or send me a mail:</h2>{" "}
          <Button className="sendMailButton"></Button>
        </div>
      </Container>
    </section>
  );
}

export default About;
