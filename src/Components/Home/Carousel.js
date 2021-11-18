import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../../App.css";
import Carousel_1 from "./Carousel_Images/Carousel_1.jpg";
import Carousel_2 from "./Carousel_Images/Carousel_2.jpg";
import Carousel_3 from "./Carousel_Images/Carousel_3.jpg";

class Carousel extends Component {
  render() {
    var settings = {
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
        <Slider {...settings}>
          <div className="">
            <div className="absolute  flex  flex-col flex-wrap overflow-hidden py-24 lg:pl-64 pl-10 sm:pl-2">
              <h1 className="text-4xl font-bold text-white">
                One of The Fastest
              </h1>
              <h1 className=" text-4xl font-bold text-white">
                Growing Pharmaceutical
              </h1>
              <p className="text-normal text-4xl font-mediun text-white">
                Company of India
              </p>

              <div className="my-4 xl:mt-10 ">
                <Link
                  className="py-3 px-6 xl:px-10 xl:py-5 bg-gray-700 text-md md:text-xl text-medium text-white uppercase"
                  to="/company">
                  Our Company
                </Link>
              </div>
            </div>
            <img
              className="w-full top_carousel "
              src={Carousel_1}
              alt="Carousel_1"
            />
          </div>

          <div>
            <div className="absolute flex  flex-col flex-wrap  overflow-hidden py-24 lg:pl-64 sm:pl-10 pl-2">
              <h1 className="text-4xl font-bold text-white">
                Making Good Health available
              </h1>
              <h1 className="text-4xl font-bold text-white">all the time</h1>
              <p className="text-normal md:text-2xl xl:text-4xl font-mediun text-white ">
                We take utmost care to understand the needs of our customers.
              </p>

              <div className="my-4 xl:mt-10 ">
                <Link
                  className="py-3 px-6 xl:px-10 xl:py-5 bg-gray-700 text-md md:text-xl text-medium text-white uppercase"
                  to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>

            <img
              className="w-full top_carousel"
              src={Carousel_2}
              alt="Carousel_2"
            />
          </div>

          <div>
            <div className="absolute flex  flex-col flex-wrap overflow-hidden py-24 lg:pl-64 sm:pl-10 pl-2">
              <h1 className="text-4xl font-bold text-white">
                Our Purpose - To Provide
              </h1>
              <p className="text-normal md:text-2xl xl:text-4xl font-mediun text-white">
                Quality. Affordability. Availability.
              </p>

              <div className="my-4 xl:mt-32">
                <Link
                  className="py-3 px-6 xl:px-10 xl:py-5 bg-gray-700 text-md md:text-xl text-medium text-white uppercase"
                  to="/products">
                  Products
                </Link>
              </div>
            </div>

            <img
              className="w-full top_carousel"
              src={Carousel_3}
              alt="Carousel_3"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Carousel;
