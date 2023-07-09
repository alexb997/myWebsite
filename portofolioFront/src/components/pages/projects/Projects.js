import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <h1>My Projects</h1>
      <h2>Here is a list of my projects </h2>
      <Col>
        <Row>
          <ProjectCard id="1" />
        </Row>
        <br />
        <Row>
          <ProjectCard id="2" />
        </Row>
        <Row>
          <ProjectCard id="3" />
        </Row>
        <Row>
          <ProjectCard id="6" />
        </Row>
        <Row>
          <ProjectCard id="5" />
        </Row>
        <Row>
          <ProjectCard id="4" />
        </Row>
        <Row>
          <ProjectCard id="8" />
        </Row>

        <Row>
          <ProjectCard id="7" />
        </Row>
      </Col>
    </Container>
  );
}

export default Projects;
