import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../../UI/Button/Button";

const PersonalProjectItemCard = (props) => {
  return (
    <Card className="cardSize text-center">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button link={props.demoUrl} style={{ color: "black" }} target="_blank">
          View Demo
        </Button>
        <Button
          link={props.githubUrl}
          style={{ color: "black" }}
          target="_blank"
        >
          View Code
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default PersonalProjectItemCard;
