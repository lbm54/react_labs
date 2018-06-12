import React from "react";

const Card = props => {
  return (
    <div className="card">
      <div className="card-header bg-primary">
        {props.cardData.name} @{props.cardData.handle}
      </div>
      <div className="card-body bg-light">{props.cardData.body}</div>
    </div>
  );
};

export default Card;
