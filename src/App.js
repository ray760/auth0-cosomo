import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import M from '../node_modules/materialize-css/dist/js/materialize';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import SideBar from './components/SideBar';
import LetsChat from './components/LetsChat';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Navbar M={M} />
          <div className="row">
            <div className="col l2 hide-on-med-and-down">
              <SideBar  />
            </div>

            <div className="col s12 m12 l10">
              <Route exact path='/' component={Intro} />
              <Route path='/about' component={AboutMe} />
              <Route path='/lets-chat' component={LetsChat} />
            </div>
          </div>


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
