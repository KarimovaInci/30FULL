import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MySlider.scss";

const MySlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}  className="sliderimg">
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/bizpro/images/home/slide-1.jpg.webp"
            alt="First slide"
          />
          <Carousel.Caption  className="slider__title">
            <h1>HELLO WE'RE BIZPRO</h1>
            <h6>SUB HEAD, MOTTO OR MISSION SUBTITLE</h6>
            <button>SEE OUR PROJECTS</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}  className="sliderimg">
          <img
            className="d-block w-100"
            src="https://preview.colorlib.com/theme/bizpro/images/home/slide-2.jpg.webp"
            alt="Second slide"
          />
          <Carousel.Caption  className="slider__title">
            <h1>HELLO WE'RE BIZPRO</h1>
            <h6>SUB HEAD, MOTTO OR MISSION SUBTITLE</h6>
            <button>SEE OUR PROJECTS</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MySlider;
