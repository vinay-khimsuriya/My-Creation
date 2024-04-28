import React from "react";
import Slider from "react-slick";
import image from '../images/quotesImages/1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CurouselFirstSlide from '../curousel-slides/CurouselFirstSlide'
import CurouselSecondSlide from '../curousel-slides/CurouselSecondSlide'
import CurouselThirdSlide from '../curousel-slides/CurouselThirdSlide'
import CurouselForthSlide from '../curousel-slides/CurouselForthSlide'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  return (

    <div className="slider-container border bg-dark m-0">
      <Slider className="bg-dark text-light m-0" {...settings}>
        <div><CurouselFirstSlide/> </div>
        <div><CurouselSecondSlide/></div>
        <div><CurouselThirdSlide/></div>
        <div><CurouselForthSlide/></div>
        <div><CurouselFirstSlide/></div>
        <div><CurouselForthSlide/></div>
      </Slider>
     </div> 
  );
}

export default Slide