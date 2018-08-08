import React, { Component } from 'react';
import {
  Link
} from 'react-router';

import Jumbotron from '../Components/Landing/Jumbotron';
import Intermission from '../Components/Landing/Intermission';


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
          <Intermission />
        </div>
        <div>
          <h5> Some Bullshit about myself should go here or above the Intermission
              Not sure what to do in the inertmmission as of yet
          </h5>
        </div>
      </div>
    )
  }
}

export default LandingPage;
