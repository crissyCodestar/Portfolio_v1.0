import React, { Component } from 'react';
import {
  Link
} from 'react-router';
import SocialLinks from '../Components/SocialLinks'
import ContactForm from '../Components/Contact/ContactForm';

class Contact extends Component {
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div>
        <h1>Contact Me</h1>
        <SocialLinks />
        <div className='col-12'>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact;
