import React from "react";
import { counterVectors } from "./Counter_Images/Counter_Images";
import CountUp from "react-countup";

function Counter() {
  const counterImage = counterVectors.map(
    ({ name, images, id }) => {
      return (
        <div>
            <div>
                  <img key={id} className="w-12 h-12" src={images} alt={name} />
            </div>
          
        </div>
      );
    }
);

    const counterno = counterVectors.map(
        ({ id, endno, durationno }) => {
          return (
            <div className="flex m-4 text-2xl text-white font-medium">
              <div key={id}>
                <CountUp
                  className=""
                  start={0}
                  end={endno}
                  duration={durationno}
                />
              </div>
              <div className="text-white font-medium">+</div>
            </div>
          );
        }
    );
    
    
  return (
    <div className="w-full bg-gray-700 py-16 px-32">
      <div className="flex justify-around">{counterImage}</div>
      <div className="flex justify-around">
        {counterno}
      </div>
    </div>
  );
}

export default Counter;
