import React from 'react';
import './Contact.scss';
import { Card, ListGroup, Container } from 'react-bootstrap';
import storeFront from '../Screenshot 2023-01-19 at 12.07.17 AM.png';

function Contact() {
  return (
    <Container className="contact">
      <h2 className="contact-header">Contact Us</h2>
      <Card
        style={{ width: '20rem' }}
        classname="contact-card"
        border="secondary"
      >
        <Card.Header>
          <h3>Cecilia's Pizzeria</h3>
        </Card.Header>
        <Card.Img variant="top" src={storeFront} />
        <Card.Body></Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <h5>Open 7 days 11AM-10PM</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>(718)-484-7495 or (718)-484-7496</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            {' '}
            <h5>Email: ceciliaspizza@gmail.com</h5>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="https://www.google.com/maps/place/Cecilia's+Pizzeria/@40.6302609,-73.9307107,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25cacedb4663f:0x947251224cb96fd6!8m2!3d40.6302609!4d-73.928522?hl=en">
            Directions
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
