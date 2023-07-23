import Card from "react-bootstrap/Card";
import test from "./test.jpg";
import "./Projects.css";
import { Container } from "react-bootstrap";

function ProjectCard(props) {
  return (
    <>
      <Card
        onClick={() => navigate(`/project/` + props.project.id)}
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
          <Card.Subtitle>Status (finished or in work)</Card.Subtitle>
          <Card.Text>{props.project.description}</Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default ProjectCard;
