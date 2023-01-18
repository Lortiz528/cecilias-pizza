import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import logo from './ceciliasLogo.png'
import './Nav.scss'



function Nav() {
  return (
    <Navbar className=' nav-bar' sticky='top'>
      <Link to='/'>
      <img  src={logo} alt='logo' className='logo' />
      </Link>
      <Link to='/about'>
        Menu
      </Link>
      <Link to='/contact'>
        Contact
      </Link>
    </Navbar>
  )
}

export default Nav