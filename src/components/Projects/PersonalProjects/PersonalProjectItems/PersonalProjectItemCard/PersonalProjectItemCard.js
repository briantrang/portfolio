import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../../UI/Button/Button";
import "./PersonalProjectItemCard.scss";

const PersonalProjectItemCard = (props) => {
  //Generate individual cards for each personal project
  return (
    <Card className="card-size text-center">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Img className="imgType p-1" src={props.imgType}></Card.Img>
        <Card.Subtitle className="card-subtitle">{props.type}</Card.Subtitle>
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
