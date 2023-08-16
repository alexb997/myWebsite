import { useEffect, useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

function ProjectsList() {
  const [projectsList, setProjectsList] = useState([]);
  useEffect(() => {
    const fetchProjects = () => {
      return fetch("http://localhost:8080/projects/")
        .then((response) => response.json())
        .then((data) => {
          setProjectsList(data.items);
        })
        .catch((err) => console.log(err));
    };
    fetchProjects();
  });
  return (
    <Container>
      <h1>Projects</h1>
      <Col>
        {projectsList.length !== 0 ? (
          projectsList.map((c, index) => (
            <>
              <ProjectCard id={index} project={c} />
              <br />
            </>
          ))
        ) : (
          <h3>No Projects documented</h3>
        )}
      </Col>
    </Container>
  );
}

export default ProjectsList;
