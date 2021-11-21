import React from "react";
import Slider from "react-slick";
import { CarouselFiveDetails } from "./CorouselFiveDetails/CarouselFiveDetails";
import '../../App.css';
function OurPolicyCarousel() {
  
        const carouselFive = CarouselFiveDetails.map(
          ({ id, image, heading, content }) => {
            return (
              <div key={id} className=" flex flex-wrap px-2 container">
                <img
                  className=" image imgHeight"
                  src={image}
                  alt={heading}
                />

                <div class="flex flex-col overlay cursor-pointer text-white justify-center items-center">
                  <h1 className="text-xl uppercase text-white text-center font-bold">
                    {heading}
                  </h1>
                  <h1 className=" text-md p-2 text-center text-white">
                    {content}
                  </h1>
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
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };
    return (
      <div>
        <Slider className=" h-48 object-contain" {...settings}>
          {carouselFive}
        </Slider>
      </div>
    );
  }
export default OurPolicyCarousel;
