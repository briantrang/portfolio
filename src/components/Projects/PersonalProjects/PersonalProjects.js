import React, { useState, useEffect } from "react";
import "./PersonalProjects.scss";
import NegativeTopMargin from "../../Layout/NegativeTopMargin/NegativeTopMargin";
import axios from "axios";
import database from "../../../firebase";
import CardDeck from "react-bootstrap/CardDeck";
import PersonalProjectItemCard from "./PersonalProjectItems/PersonalProjectItemCard/PersonalProjectItemCard";

const PersonalProjects = (props) => {
  const [projectItem, setProjectItem] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  //Get project items
  useEffect(() => {
    const databaseUrl = database.ref();
    axios
      .get(databaseUrl + ".json")
      .then((res) => {
        setProjectItem(res.data.personalProjects.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //filter out projectItems based off searchValue

  let filteredItems = projectItem.filter((item) => {
    return item.type.indexOf(searchValue) !== -1;
  });

  //create variable to render conditionally
  let projectCards;

  //conditionally render the projectCards based on if the search finds a match or not
  //if match is found, render cards, else, render error message
  if (filteredItems.length !== 0) {
    projectCards = (
      <CardDeck className="cardDeck text-center">
        {filteredItems.map((item, i) => {
          return (
            <PersonalProjectItemCard
              image={item.image}
              title={item.title}
              imgType={item.imgType}
              type={item.type}
              description={item.description}
              demoUrl={item.demoUrl}
              githubUrl={item.githubUrl}
              className="cardSize"
            />
          );
        })}
      </CardDeck>
    );
  } else {
    projectCards = (
      <h1 className="text-center p-2">
        Sorry no items matches your search. Try Again.
      </h1>
    );
  }

  return (
    <NegativeTopMargin>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          id="searchProjects"
          placeholder="Search Projects"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value.toLowerCase());
          }}
        />
        <label for="searchProjects" className="form__label">
          Search Projects
        </label>
      </div>
      {projectCards}
    </NegativeTopMargin>
  );
};

export default PersonalProjects;
