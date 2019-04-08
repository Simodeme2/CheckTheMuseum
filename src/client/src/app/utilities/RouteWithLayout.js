import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route as ReactRoute} from 'react-router';

class RouteWithLayout extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    layout: PropTypes.func,
    path: PropTypes.string,
    exact: PropTypes.bool,
  }

  render = () => {
    const {component, layout, path, exact} = this.props;
    let routeComponent = props => React.createElement(component, props);

    if (layout) {
      routeComponent = props =>
        React.createElement(layout, props, React.createElement(component, props));
    }

    return <ReactRoute path={path} exact={exact} render={routeComponent}/>;
  }
}

export default RouteWithLayout;