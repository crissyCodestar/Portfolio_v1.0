import React from 'react';
import {Link} from 'react-router-dom';
const SocialLinks = () => (
  <nav className='container'>
    <ul className='navbar'>
      <li>
        <Link to='https://www.facebook.com/CrystalGrantCodester'>Facebook</Link>
      </li>
      <li>
        <Link to='https://www.instagram.com/crissy_love82/'>Instagram</Link>
      </li>
      <li>
        <Link to='https://github.com/crissygrant82'>Github</Link>
      </li>
      <li>
        <Link to='https://twitter.com/CrissyCodester'>Twitter</Link>
      </li>
    </ul>
  </nav>
)

export default SocialLinks;
