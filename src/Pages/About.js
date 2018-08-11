import React, { Component } from 'react';
import {
  Link
} from 'react-router';

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
        <div>
          <h2>Description</h2>
        </div>
        <div>
          <p>Tell some things about myself here so I am able to get a job.</p>
        </div>
        <div>
          <h3>
            List of awesome things I can do
          </h3>
            <ul>
              <li>
                JavaScript
              </li>
              <li>
                React JS
              </li>
              <li>
                Node JS
              </li>
            </ul>
        </div>

      </div>

    )
  }
}

export default About;
