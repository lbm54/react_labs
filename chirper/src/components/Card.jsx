import React from "react";

const Card = props => {
  return (
      <div className="col-3 m-1 card bg-light">
        <div className="card-body">
          <div className="card-title">
            {props.cardData.name} @{props.cardData.handle}
          </div>
          <div className="card-text">{props.cardData.body}</div>
        </div>
      </div>
  );
};

export default Card;
