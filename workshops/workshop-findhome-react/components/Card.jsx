import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img src={props.image} alt={props.title}></img>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Card;