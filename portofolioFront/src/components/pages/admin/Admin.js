import Header from "./Header";
import Experience from "./Experience";
import { Container } from "react-bootstrap";
import "./home.css";
import Contact from "../contact/Contact";

function Home() {
  return (
    <Container>
      <h1>Zonă introducere noi proiecte/update proiecte vechi.</h1>
      <ProjectForm/>
    </Container>
  );
}

export default Home;
