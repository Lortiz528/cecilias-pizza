import React from 'react';
import './Home.scss';
import HomeCarousel from './HomeCarousel';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container className='home-container'>
      <h2 className="home">Welcome to Cecilias Pizza BK!</h2>
      <HomeCarousel/>
    </Container>
  );
}

export default Home;
