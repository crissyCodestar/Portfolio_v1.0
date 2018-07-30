import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import {Button} from './Button';

const Nav = () =>(
  <nav className='container'>
    <ul className='navbar'>
      <li className='navbar-brand'>
        <Link to='/'>Home</Link>
      </li>
      {" "}
      <li className='nav-item'>
        <Link to='/about'> About</Link>
      </li>
      {" "}
      <li className='nav-item'>
        <Link to='/gallery'> Gallery</Link>
      </li>
      {" "}
      <li className='nav-item'>
        <Link to='playground'> Playground</Link>
      </li>
      {" "}
      <li className='nav-item'>
        <Link to='/contact'> Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav;
