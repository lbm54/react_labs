import React from "react";
const CardFilm = props => {
  let cardObject = props.cardObject;

  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">{cardObject.title}</h5>
        <p className="card-text">{cardObject.description}</p>
      </div>
    </div>
  );
};

export default CardFilm;
