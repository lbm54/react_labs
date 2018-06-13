import React from "react";
import CardFilm from "./CardFilm";
import CardPerson from "./CardPerson";

const CardList = props => {
  console.log(props);
  let cards = props.cardArray.map((obj, index) => {
    if (props.type === "films") {
      return <CardFilm cardObject={obj} key={obj.id} />;
    }
    else {
        return <CardPerson cardObject={obj} key={obj.id} />;
    }
  });

  return <div className="row cardList">{cards}</div>;
};

export default CardList;
