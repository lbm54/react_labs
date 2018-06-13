import React from "react";
const Card = props => {
  let cardObject = props.cardObject;

  return (
    <div className="card">
      <div className="card-header bg-primary">{cardObject.title}</div>
      <div className="card-body bg-light">{cardObject.description}</div>
    </div>
  );
};

export default Card;
