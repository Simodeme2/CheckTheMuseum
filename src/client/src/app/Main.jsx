/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

/*
Page components
*/
import HomePage from './pages/home/HomePage';

/*
Import internal libraries
*/
import logo from './assets/images/logo.svg';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Switch>
          <Route exact path='/' component={ HomePage }/>
          <Redirect from="/home" to="/"/>
        </Switch>
      </div>
    );
  }
}

export default Main;