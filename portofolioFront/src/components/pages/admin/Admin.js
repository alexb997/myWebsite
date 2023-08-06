import Header from "./Header";
import Experience from "./Experience";
import { Container } from "react-bootstrap";
import "./home.css";
import ProjectsList from "./ProjectsList";

function Home() {
  return (
    <Container>
      <h1>Zonă introducere noi proiecte.</h1>
      <ProjectForm />
      <h2>List of </h2>
      <ProjectsList />
    </Container>
  );
}

export default Home;
