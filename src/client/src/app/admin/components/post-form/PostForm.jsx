/*
External libraries
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/*
Material UI
*/
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

/*
Styles
*/
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

/*
Validation
*/
const validationSchema = Yup.object(
{
  title: Yup.string("Enter a title").required("Title is required"),
  synopsis: Yup.string("Enter a synopsis").required("Synopsis is required"),
  body: Yup.string("Enter a story").required(false),
});

class PostForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    categories: [],
  };

  render() {
    const { classes } = this.props;
    const initialValues = { title: '', synopsis: '', body: '', };

    return (
      <Paper className={classes.root}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
              <Field type="synopsis" name="synopsis" />
              <ErrorMessage name="synopsis" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Paper>
    )
  }
}

export default withStyles(styles)(PostForm);