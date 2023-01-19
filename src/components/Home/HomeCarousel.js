import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeCarousel.scss';
import item1 from '../Screenshot 2023-01-18 at 1.37.07 PM.png';
import item2 from '../Screenshot 2023-01-18 at 1.37.52 PM.png';
import item3 from '../Screenshot 2023-01-18 at 1.38.18 PM.png';
import item4 from '../Screenshot 2023-01-18 at 4.52.31 PM.png';
import item5 from '../Screenshot 2023-01-18 at 1.38.03 PM.png';

function HomeCarousel() {
  return (
    <div className="carousel">
       <br></br>
      <h2 className="home">Welcome to Cecilias Pizza BK!</h2>
      <br></br>
      <Carousel  fade>
        <Carousel.Item>
          <img className='carou' src={item1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carou' src={item2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carou' src={item3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carou' src={item4} alt="fourth slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className='carou' src={item5} alt="fifth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
