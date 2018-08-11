import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import SocialLinks from './Components/SocialLinks'
import LandingPage from './Pages/LandingPage';
import TechPlayground from './Pages/TechPlayground';
import ArtGallery from './Pages/ArtGallery';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Nav from './Components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route strict exact path='/' component={LandingPage} />
          <Route path='/playground' component={TechPlayground} />
          <Route path='/gallery' component={ArtGallery} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <SocialLinks />
      </div>
    );
  }
}

export default App;
