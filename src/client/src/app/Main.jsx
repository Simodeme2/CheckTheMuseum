/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';

/*
Utilities
*/
import { RouteWithLayout } from './utilities';

/*
Layout
*/
import { PageLayout } from './layouts';
import { AdminLayout } from './admin/layouts';

/*
Page components
*/
import HomePage from './pages/home/HomePage';
import DashboardPage from './admin/pages/dashboard';

/*
Import styling
*/
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <RouteWithLayout exact path='/' layout={ PageLayout } component={ HomePage }/>
          <Redirect from="/home" to="/"/>
          <RouteWithLayout path="/admin" layout={ AdminLayout } component={ DashboardPage }></RouteWithLayout>
          <Redirect from="/admin/dashboard" to="/admin"/>
        </Switch>
      </div>
    );
  }
}

export default Main;