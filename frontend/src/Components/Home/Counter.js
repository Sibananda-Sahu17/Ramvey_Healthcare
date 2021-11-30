import React from "react";
import { counterVectors } from "./Counter_Images/Counter_Images";
import CountUp from "react-countup";

function Counter() {
  const counterImage = counterVectors.map(({ name, images, id }) => {
    return (
      <div>
        <div>
          <img key={id}
            className="w-12 h-12"
            src={images} 
            alt={name} />
        </div>
      </div>
    );
  });

  const counterno = counterVectors.map(({ id, endno, durationno }) => {
    return (
      <div className="flex m-4 text-center text-2xl font-medium">
        <div key={id}>

          <CountUp className=""
            start={0}
            end={endno}
            duration={durationno} />
          
        </div>
        <div className="font-medium">
          +
        </div>
      </div>
    );
  });

  return (
    <div className="w-full grad md:px-32 md:py-12 py-8">

      <div className="flex justify-around ">
        {counterImage}
      </div>
      
      <div className="flex justify-around">
        {counterno}
      </div>

    </div>
  );
}

export default Counter;
