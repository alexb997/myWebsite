import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
const [housesList, setHousesList] = useState([]);

function Projects() {
  const [projectsList, setProjectsList] = useState([]);
  useEffect(() => {
    const fetchHouses = () => {
      return fetch("http://localhost:8080/projects/")
        .then((response) => response.json())
        .then((data) => {
          setProjectsList(data.items);
        })
        .catch((err) => console.log(err));
    };
    fetchHouses();
  });

  return (
    <Container>
      <h1>My Projects</h1>
      <h2>Here is a list of my projects </h2>
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

export default Projects;
