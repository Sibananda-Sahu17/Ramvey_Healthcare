import React, { Component } from "react";
import Slider from "react-slick";
import { CarouselFiveDetails } from "./CorouselFiveDetails/CarouselFiveDetails";
export default class MultipleItems extends Component {
  render() {
    const carouselFive = CarouselFiveDetails.map(
      ({ id, image, heading, content }) => {
        return (
          <div key={id} className="hover:bg-black ">
            <img className="h-48 2xl:w-full " src={image} alt={heading} />
            {/* <div className="box-border ">
              <div className=" w-full bg-gray-500 bg-opacity-25 ">
                <h1 className=" text-2xl text-justify-center text-white">
                  {heading}
                </h1>
              </div>
            </div> */}
            <div class="absolute p-6 text-2xl tracking-widest text-white uppercase transition-opacity transform -translate-y-1/2 bg-black bg-opacity-75 opacity-0 top-1/2 rounded-xl group-hover:opacity-100">
              Tadaa 🎉
            </div>
          </div>
        );
      }
    );

    const settings = {
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1650,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 462,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider className=" h-48 object-contain bg-gray-400" {...settings}>
          {carouselFive}
        </Slider>
      </div>
    );
  }
}
