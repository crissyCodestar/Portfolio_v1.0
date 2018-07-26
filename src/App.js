import React, { Component } from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import TechPlayground from './Pages/TechPlayground';
import ArtGallery from './Pages/ArtGallery';
import About from './Pages/About';
import Nav from './Components/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route strict exact path='/' component={LandingPage} />
          <Route path='/tech_playground' component={TechPlayground} />
          <Route path='/art_gallery' component={ArtGallery} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
