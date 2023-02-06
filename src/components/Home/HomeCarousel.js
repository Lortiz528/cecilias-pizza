import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.scss';

function HomeCarousel() {
  return (
    <div id="carouselSection" className="carousel">
      <br></br>
      <h2 className="home">Cecilias Pizzeria </h2>
      <br></br>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/t9mnSvz.jpg"
            alt="slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/iipNzBG.png"
            alt="slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/4N6iLNk.jpg"
            alt="slide 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/tX23g0V.jpg"
            alt="slide 4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/RvDWXXt.jpg"
            alt="slide 5"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/AorfHtw.jpg"
            alt="slide 6"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/M0apq2v.jpg"
            alt="slide 7"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/kzVRFiq.jpg"
            alt="slide 8"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/D61pzS8.png"
            alt="slide 9"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/PM2lbaY.jpg"
            alt="slide 10"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src="https://i.imgur.com/DymAndF.png"
            alt="slide 11"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
