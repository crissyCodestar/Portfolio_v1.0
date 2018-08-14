import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import facebook from '../images/facebook_wht.png'
import instagram from '../images/instagram_wht.png'
import github from '../images/github_wht.png'
import twitter from '../images/twitter_wht.png'


const SocialLinks = () => (

    <nav className='nav justify-content-center bottom'>
        <Link
        className='nav-link'
        target='blank'
        to={'//www.facebook.com/CrystalGrantCodester'}>
          <Button colorValue='primary_gradient_social' icon={<img src={facebook} alt="facebook"/>}/>
        </Link>

        <Link
        className='nav-link'
        target='blank'
        to='//www.instagram.com/crissy_love82/'>
          <Button colorValue='primary_gradient_social' icon={<img src={instagram} alt="instagram"/>}/>
        </Link>

        <Link
        className='nav-link'
        target='blank'
        to='//github.com/crissygrant82'>
          <Button colorValue='primary_gradient_social' icon={<img src={github} alt="github"/>}/>
        </Link>

        <Link
        className='nav-link'
        target='blank'
        to='//twitter.com/CrissyCodester'>
          <Button colorValue='primary_gradient_social' icon={<img src={twitter} alt="twitter"/>}/>
        </Link>
    </nav>

)

export default SocialLinks;
