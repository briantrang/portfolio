import React, { useEffect, useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import "./ReactProjectItems.scss";
import axios from "axios";
import PersonalProjectItemCard from "../PersonalProjectItemCard/PersonalProjectItemCard";

const PersonalProjectItems = (props) => {
  const [personalReactProjects, setPersonalReactProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://portfolio-6b831.firebaseio.com/.json")
      .then((res) => {
        setPersonalReactProjects(res.data.personalProjects.react);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, []);
  return (
    <div>
      <CardDeck className="cardDeck text-center">
        {personalReactProjects.map((item, i) => {
          return (
            <PersonalProjectItemCard
              image={item.image}
              title={item.title}
              description={item.description}
              demoUrl={item.demoUrl}
              githubUrl={item.githubUrl}
              className="cardSize"
            />
          );
        })}
      </CardDeck>
    </div>
  );
};

export default PersonalProjectItems;
