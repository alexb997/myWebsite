import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

function Details() {
  return (
    <Container>
      <h1>Project title</h1>
      <h2>Info coming from database</h2>
      <Col>
        <Row>
          <ProjectCard id="1" />
        </Row>
        <Row>
          <ProjectCard id="2" />
        </Row>
      </Col>
    </Container>
  );
}

export default Details;
