import Header from "./Header";
import Experience from "./Experience";
import { Container } from "react-bootstrap";
import "./home.css";
import Contact from "./Contact";
import About from "./About";

function Home() {
  return (
    <Container>
      <Header />
      <Experience />
      <About />
      <Contact />
    </Container>
  );
}

export default Home;
