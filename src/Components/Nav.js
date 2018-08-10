import React from 'react';
import {
  Link
} from 'react-router-dom';
import { Button } from './Button';

const Nav = () =>(

    <nav className='navbar navbar-expand-md navbar-light bg-light ' >
    <div className="container-fluid">
    <div className="navbar-header">
      <Link to='/' className='navbar-brand'>Home</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className='navbar-toggler-icon'/>
      </button>
    </div>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'> About</Link>
            </li>
            {" "}
            <li className='nav-item'>
              <Link to='/gallery' className='nav-link'> Gallery</Link>
            </li>
            {" "}
            <li className='nav-item'>
              <Link to='playground' className='nav-link'> Playground</Link>
            </li>
            {" "}
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

)

export default Nav;
