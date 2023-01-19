import React from 'react';
import { Carousel } from 'react-bootstrap';
import item1 from '../Screenshot 2023-01-18 at 1.37.07 PM.png';
import item2 from '../Screenshot 2023-01-18 at 1.37.52 PM.png';
import item3 from '../Screenshot 2023-01-18 at 1.38.18 PM.png';

function HomeCarousel() {
  return (
    <div className="carousel">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-80" src={item1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-80" src={item2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-80" src={item3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
