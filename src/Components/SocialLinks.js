import React from 'react';
import {Link} from 'react-router-dom';
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'

const SocialLinks = () => (
  <nav className='nav justify-content-center'>
        <Link
        className='nav-link'
        to='https://www.facebook.com/CrystalGrantCodester'><img src={facebook} alt="facebook"/></Link>

        <Link
        className='nav-link'
        to='https://www.instagram.com/crissy_love82/'><img src={instagram} alt="instagram"/></Link>

        <Link
        className='nav-link'
        to='https://github.com/crissygrant82'><img src={github} alt="github"/></Link>

        <Link
        className='nav-link'
        to='https://twitter.com/CrissyCodester'><img src={twitter} alt="twitter"/></Link>

  </nav>
)

export default SocialLinks;
