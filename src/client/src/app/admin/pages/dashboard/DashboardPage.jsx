/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';

/*
Utilities
*/
import { RouteWithLayout } from '../../../utilities';

/*
Layout
*/
import { ContentLayout } from '../../layouts';

/*
Pages
*/
import PostsTablePage from '../posts-table';

class DashboardPage extends Component {
  render() {
    return (
      <div className="Admin">
        <RouteWithLayout path="/admin/posts" layout={ ContentLayout } component={ PostsTablePage }></RouteWithLayout>
      </div>
    )
  }
}

export default (DashboardPage);