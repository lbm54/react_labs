import React from 'react';
import Card from './Card';

const CardList = (props) => {

    let cards = props.cardArray.map((obj, index) => {
        return (
            <Card cardObject = {obj} key = {index} />
        )
    })

    return(
        <div className="cardList">
            {cards}
        </div>
    );
}

export default CardList;