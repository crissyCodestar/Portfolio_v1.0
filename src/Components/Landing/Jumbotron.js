import React from 'react';
import {Button} from '../Button';
import {Link} from 'react-router-dom';


const Jumbotron = () => (
  <div className='jumbotron'>
    <h1 className='display-4'>Welcome to Landing Page</h1>
  <div>
    <Link to='/contact'>
      <Button text='Contact Me' colorValue='warning_gradient' />
    </Link>
  </div>
  </div>
)
export default Jumbotron;
