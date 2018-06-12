import React from "react";
import Card from "./Card";

const CardList = props => {
  let cards = props.cardArray.map((card, index) => {
    return (
        <Card key={index} cardData={card} />
    );
  });

  return <div className="cardList">{cards}</div>;
};

export default CardList;
