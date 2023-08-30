import { Container } from "react-bootstrap";
import ProjectsList from "./ProjectsList";
import ProjectForm from "./ProjectForm";

function Admin() {
  return (
    <Container>
      {/* <h1>Zonă introducere noi proiecte.</h1>
      <ProjectForm /> */}
      <h2>List of </h2>
      <ProjectsList />
    </Container>
  );
}

export default Admin;
