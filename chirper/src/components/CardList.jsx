import React from "react";
import Card from "./Card";

const CardList = props => {
  let cards = props.cardArray.map((card, index) => {
    return <Card key={index} cardData={card} />;
  });

  return (
      <div className="col-md-9">
        <div className="row flex-md-row">{cards}</div>
      </div>
  );
};

export default CardList;
