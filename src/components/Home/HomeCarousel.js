import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.scss';


function HomeCarousel() {
  return (
    <div className="carousel">
       <br></br>
      <h2 className="home">Cecilias Pizzeria </h2>
      <br></br>
      <Carousel variant="dark" >
        <Carousel.Item>
          <img className='d-block w-100' src='https://i.imgur.com/4N6iLNk.jpg' alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://i.imgur.com/tX23g0V.jpg' alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://i.imgur.com/RvDWXXt.jpg' alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://i.imgur.com/AorfHtw.jpg' alt="fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://i.imgur.com/M0apq2v.jpg' alt="fifth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://i.imgur.com/kzVRFiq.jpg' alt="sixth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src='https://i.imgur.com/D61pzS8.png' alt="seventh slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
