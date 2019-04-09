/*
External libraries
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
Material UI
*/
import { withStyles } from '@material-ui/core/styles';

/*
Styles
*/
const styles = {

};

class PostForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    categories: [],
  };

  render() {
    return (
      <div>
        FORM
      </div>
    )
  }
}

export default withStyles(styles)(PostForm);