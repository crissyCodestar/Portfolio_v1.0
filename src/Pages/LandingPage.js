import React, { Component } from 'react';
import {
  Link
} from 'react-router';

import Jumbotron from '../Components/Landing/Jumbotron';
import Intermission from '../Components/Landing/Intermission';
import About from '../Components/Landing/About';
import Sample from '../Components/Landing/Sample';

class LandingPage extends Component {
  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <div>
        <div>
          <Jumbotron />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Intermission />
        </div>
        <div>
          <Sample />
        </div>
      </div>
    )
  }
}

export default LandingPage;
