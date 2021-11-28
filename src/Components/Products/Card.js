import React from "react";

function Card(props) {

  return (


    <div className="p-4 md:w-1/2 lg:w-1/4">
      <div className="h-full xl:mx-4 shadow-xl bg-gray-200 border-white border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={props.img} alt={props.name} />
        <div className="p-6">
          <h1 className="break-words title-font text-lg font-medium text-gray-900">{props.name}</h1>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.mg}mg</h2>
          <p className="leading-relaxed mb-3">{props.ingredients}</p>
          <p className="leading-relaxed mb-3">{props.price}</p>          
        </div>
      </div>
    </div>
  );
}

export default Card;
