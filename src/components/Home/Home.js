import React from 'react';
import './Home.scss';
import HomeCarousel from './HomeCarousel';
import { Container } from 'react-bootstrap';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';

function Home() {
  return (
    <Container>
      <HomeCarousel />
      <Menu/>
      <hr/>
      <Contact/>
    </Container>
  );
}

export default Home;
