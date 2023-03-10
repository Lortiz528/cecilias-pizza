import React from 'react'
import { Container } from 'react-bootstrap'
import './Menu.scss'

function Menu() {
  return (
    <Container  id='menuSection' className='menuContainer'>
      <section className='menuSection'>
        <img className='menuImage' src='https://i.imgur.com/Scs98iE.png' alt='menu1'/>
      <br></br>
        <img className='menuImage' src='https://i.imgur.com/K9OyI8d.png' alt='menu2'/>
      </section>
      <footer>* Menu Items and prices are subject to change. Please visit or contact us for latest updates *</footer>
    </Container>
  )
}

export default Menu