import React from "react";
import { ourPolicyDetails } from "./OurPolicyDetails/OurPolicyDetails";
import OurPolicyCarousel from './OurPolicyCarousel.js';

function OurPolicy() {

  const ourPolicy = ourPolicyDetails.map(({ id, image, heading, content }) => {
    return (
      <div key={id} className="">
        <div className="grid justify-items-center ... py-6 ">
          <img className="w-32 h-32 " src={image} alt={heading} />

          <h1 className="py-6 text-2xl font-semibold">{heading}</h1>
          <p className="uppercase py-2 text-xl font-normal px-4 text-center">{content}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="px-32 py-16">
      <div className="pb-32 text-center">
        <h1
          className="font-extrabold 
                    text-5xl">
          Our Policy
        </h1>

        <h3 className="font-normal text-xl">
          WE FOLLOW A STRICT QUALITY POLICY
        </h3>
      </div>

      <div
        className="grid 
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              place-content-center
              pb-32
              ">
        {ourPolicy}
      </div>

      <div className="px-14 flex flex-2">
        <div className="w-1/3">
          <h1 className="text-3xl font-bold">Why choose us?</h1>
          <p className=" text-xl text-jusitfy">
            We’re dedicated to fulfilling the promise of human potential, in all
            places, in all aspects and stages of life. We believe that health is
            the key to that promise.
          </p>
        </div>

        <div className="w-2/3">
          <OurPolicyCarousel />
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
