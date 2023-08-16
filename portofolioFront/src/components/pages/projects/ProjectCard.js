import Card from "react-bootstrap/Card";
import test from "./test.jpg";
import "./Projects.css";
import { Container } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <>
      <Card
        className="bg-dark text-white test overflow-hidden"
        title="clicking on it will redirect to detailed project page"
      >
        <Card.Img
          src={`${test}`}
          alt="Card image"
          style={{ objectFit: "contain" }}
        />
        <Card.ImgOverlay>
          <Card.Title>{props.project.title}</Card.Title>
          <Card.Subtitle>{props.project.status}</Card.Subtitle>
          <Card.Text>{props.project.description}</Card.Text>
          <Card.Text>{props.project.updated}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default ProjectCard;
