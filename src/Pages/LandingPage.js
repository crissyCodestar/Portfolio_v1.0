import React, { Component } from 'react';
import {
  Link
} from 'react-router';

import Jumbotron from '../Components/Landing/Jumbotron';

class LandingPage extends Component {
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div>
        <Jumbotron />
      </div>
    )
  }
}

export default LandingPage;
