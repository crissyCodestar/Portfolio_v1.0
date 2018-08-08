import React, { Component } from 'react';
import {
  Link
} from 'react-router';
import SocialLinks from '../Components/SocialLinks'

class About extends Component {
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div>
        <h1>About</h1>
        <SocialLinks />
      </div>
    )
  }
}

export default About;
