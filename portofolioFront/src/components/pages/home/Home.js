import Header from "./Header";
import Experience from "./Experience";
import { Container } from "react-bootstrap";
import "./home.css";
import Contact from "../contact/Contact";

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
            Some short description of experience, small description of each
            project with link to project page Ambitions/ Plans for future after
          </p>
        </section>
      </>
      <>
        <section id="About" className="about">
          <h2>About</h2>
          <p>About zone still unsure of content</p>
        </section>
      </>
      <>
        <section id="Contact" className="contact">
          <Contact />
        </section>
      </>
    </Container>
  );
}

export default Home;
