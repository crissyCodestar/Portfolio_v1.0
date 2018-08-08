import React, { Component } from 'react';
import {
  Link
} from 'react-router';

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
        <ContactForm />
      </div>
    )
  }
}

export default Contact;
