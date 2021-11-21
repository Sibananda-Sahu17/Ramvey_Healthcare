import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { topCarouselDetails } from "./Top_Carousel_Details/Top_Carousel_Details";

function Carousel() {
  const topCarousel = topCarouselDetails.map(
      ({ image, heading1, heading2, content, link, button }, index) => {
        return (
          <div key={index} className="">
            <div className="absolute flex flex-col flex-wrap py-24 lg:pl-64 pl-2 overflow-hidden">
              <h1 className="text-4xl font-bold text-white w-screen">{heading1}</h1>
              <h1 className=" text-4xl font-bold text-white w-screen">{heading2}</h1>
              <p className="text-normal md:text-lg xl:text-3xl font-mediun w-screen text-white">
                {content}
              </p>

              <div className="my-4 xl:my-10 ">
                <Link
                  className="py-3 px-6 xl:px-10 xl:py-5 carousel-btn text-md md:text-xl text-medium text-white uppercase"
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
    
  )
}
export default Carousel;
