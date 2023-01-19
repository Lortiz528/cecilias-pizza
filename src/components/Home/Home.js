import React from 'react';
import './Home.scss';
import HomeCarousel from './HomeCarousel';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <HomeCarousel />
    </Container>
  );
}

export default Home;
