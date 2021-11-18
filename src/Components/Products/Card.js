import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card__body flex flex-col text-center w-64 border-2 m-1 my-3">
        <img className="border-2 m-3" src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.mg}mg</p>
        <p>{props.ingredients}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
