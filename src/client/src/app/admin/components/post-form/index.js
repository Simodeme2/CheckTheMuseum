/*
Import external libraries
*/
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Formik } from "formik";
import * as Yup from 'yup';
import { EditorState } from 'draft-js';

/*
Material UI
*/
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";

/*
Custom Form
*/
import Form from "./Form";

/*
Validation
*/
const validationSchema = Yup.object(
{
    title: Yup.string("Enter a title").required("Title is required").min(10).max(128),
    synopsis: Yup.string("Enter a synopsis").required("Synopsis is required").min(52).max(256),
    body: Yup.string("Enter a story").required(false).min(128),
});

/*
Styling
*/
const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   
 }
});

class PostForm extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }
    
    state = {
        categories: [],
    };

    componentWillMount() {
        this.loadCategories();
    }

    loadCategories = () => {
        fetch('/api/v1/categories')
            .then( response => response.json())
            .then( item => this.setState(prevState => ({ ...prevState, categories: item }))); 
    }

    render() {
        const { classes } = this.props;
        const values = { title: "", synopsis: "", body: "", category: "", };

        return (
            <React.Fragment>
                <div className={classes.container}>
                    <Paper className={classes.paper}>
                        <Formik
                            render={props => <Form {...props} categories={this.state.categories} />}
                            initialValues={values}
                            validationSchema={validationSchema}
                        />
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PostForm);