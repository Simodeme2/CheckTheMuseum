/*
Import extenal libraries
*/
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

/*
Pages
*/
import PostsTablePage from '../posts-table';
import PostsOverviewPage from '../posts-overview';

class DashboardPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/blogs" component={ PostsTablePage }></Route>
        <Route path="/admin/categories" component={ PostsTablePage }></Route>
        <Route path="/admin/posts" component={ PostsOverviewPage }></Route>
      </div>
    )
  }
}

export default (DashboardPage);