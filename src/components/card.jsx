import React from 'react';
import './card.css'

const Card = (props) => {
    return <div ClassName="card">{props.children}</div>
};

export default Card;