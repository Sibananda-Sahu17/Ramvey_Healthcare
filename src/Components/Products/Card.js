import React from "react";

function Card(props) {
  return (
    <div className="flex justify-center card w-full sm:w-1/2 md:w-1/3 xl:w-1/6 lg:w-1/4 m-2">
      <div className="card__body flex flex-col text-center w-64 border-2 border-black m-1 my-3 rounded-lg p-2">
        <img className="border-2 border-black rounded-lg m-3" src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
        <p>{props.mg}mg</p>
        <p>{props.ingredients}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
