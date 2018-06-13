import React from "react";
const CardPerson = props => {
  let cardObject = props.cardObject;
  let link = `https://ghibliapi.herokuapp.com/people/${cardObject.id}`;
  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">{cardObject.name}</h5>
        <h5 className="card-subtitle">{cardObject.age} {cardObject.gender}</h5>
        <p className="card-text">
          <a target="_blank" href={link}>Link to that person's JSON response</a>
        </p>
      </div>
    </div>
  );
};

export default CardPerson;
