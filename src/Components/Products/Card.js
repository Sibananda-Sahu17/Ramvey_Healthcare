import React from "react";

function Card(props) {
  return (


    <div class="p-4  md:w-1/2 lg:w-1/4">
      <div class="h-full xl:mx-4 border-2 shadow-xl bg-gray-300 border-white border-opacity-60 rounded-lg overflow-hidden">
        <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={props.img} alt={props.name} />
        <div class="p-6">
          <h1 class="break-words title-font text-lg font-medium text-gray-900">{props.name}</h1>
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.mg}mg</h2>
          <p class="leading-relaxed mb-3">{props.ingredients}</p>
          <p class="leading-relaxed mb-3">{props.price}</p>          
        </div>
      </div>
    </div>
  );
}

export default Card;
