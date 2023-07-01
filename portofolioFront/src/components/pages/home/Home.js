import Header from "./Header";
import Experience from "./Experience";
import { Container } from "react-bootstrap";
import "./home.css";

function Home() {
  return (
    <Container>
      <h1>Bună, sunt Bîlă Alexandru.</h1>
      <h2>Un programator curios axat pe java si javascript.</h2>
      <p>În continuă aspirație spre mai bine.</p>
      <header className="header"></header>
      <>
        <section className="experience">
          <h2>Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque justo nisl, id pellentesque arcu vestibulum vitae.
            Aliquam at elit auctor, rhoncus urna vel, eleifend justo.
          </p>
        </section>
      </>
    </Container>
  );
}

export default Home;
