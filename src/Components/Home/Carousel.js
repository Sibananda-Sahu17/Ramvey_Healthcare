import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../App.css";
import { topCarouselDetails } from "./Top_Carousel_Details/Top_Carousel_Details";

class Carousel extends Component {
  render() {
    const topCarousel = topCarouselDetails.map(
      ({ image, heading1, heading2, content, link, button }, index) => {
        return (
          <div key={index} className="">
            <div className="absolute  flex  flex-col flex-wrap overflow-hidden py-24 lg:pl-64 sm:pl-10 pl-2">
              <h1 className="text-4xl font-bold text-white">{heading1}</h1>
              <h1 className=" text-4xl font-bold text-white">{heading2}</h1>
              <p className="text-normal md:text-lg xl:text-3xl font-mediun text-white">
                {content}
              </p>

              <div className="my-4 xl:my-10 ">
                <Link
                  className="py-3 px-6 xl:px-10 xl:py-5 bg-gray-700 text-md md:text-xl text-medium text-white uppercase"
                  to={link}>
                  {button}
                </Link>
              </div>
            </div>
            <img
              className="w-full top_carousel "
              src={image}
              alt="Carousel_1"
            />
          </div>
        );
      }
    );

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    return (
      <div className="w- max top_carousel_dots overflow-hidden">
        <Slider {...settings}>{topCarousel}</Slider>
      </div>
    );
  }
}
export default Carousel;
