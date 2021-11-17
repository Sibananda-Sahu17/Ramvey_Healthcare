import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselFiveDetails } from "./CorouselFiveDetails/CarouselFiveDetails";
export default class MultipleItems extends Component {
    render() {
      
          const carouselFive = CarouselFiveDetails.map(
            ({ id, image, heading, content }) => {
              return (
                <div key={id} className="">
                  <div className="">
                    <div className=" absolute h-34 w-full bg-gray-500 opacity-20 text-2xl text-align-center text-white">
                      {heading}
                    </div>
                    <img className=" " src={image} alt={heading} />
                  </div>
                </div>
              );
            }
          );

      const settings = {
        arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div> 
            <Slider className=" h-48 bg-gray-400" {...settings}>
                {carouselFive}
        </Slider>
      </div>
    );
  }
}
