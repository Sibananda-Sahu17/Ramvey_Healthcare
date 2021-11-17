import React, { Component } from "react";
import Slider from "react-slick";
import Carousel_1 from './Carousel_Images/Carousel_1.jpg';
import Carousel_2 from './Carousel_Images/Carousel_2.jpg';
import Carousel_3 from './Carousel_Images/Carousel_3.jpg';
class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
      return (
        <div className=" w- max overflow-hidden relative">
          <Slider {...settings}>
            <div>
              <img src={Carousel_1} alt="Carousel_1" />
            </div>
            <div>
              <img src={Carousel_2} alt="Carousel_2" />
            </div>
            <div>
              <img src={Carousel_3} alt="Carousel_3" />
            </div>
          </Slider>
        </div>
      );
  }
}
export default Carousel;