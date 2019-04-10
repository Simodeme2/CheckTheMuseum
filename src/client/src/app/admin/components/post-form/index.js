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
    synopsis: Yup.string("Enter a synopsis").required("Synopsis is required").min(128).max(1024),
    body: Yup.string("Enter a story").required(false).min(512),
    category: Yup.string("Enter a story").required(false),
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

    loadCategories = async () => {
        try {
            const options = {
                method: 'GET',
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/categories', options);
            const responseJson = await response.json();
            if (responseJson) {
                this.setState(prevState => ({ 
                    ...prevState, 
                    categories: responseJson 
                }));
            }
        } catch(error) {
            console.log(error);
        }
    }

    submit = (values, actions) => {
        console.log(values);
        const postData = new Blob([JSON.stringify({
            title: values.title,
            synopsis: values.synopsis,
            body: values.body,
            __category: values.category
        }, null, 2)], {type : 'application/json'});

        console.log(postData);

        this.savePost(postData);
    }

    savePost = async (postData) => {
        try {
            const options = {
                method: 'POST',
                body: postData,
                mode: 'cors',
                cache: 'default'
            };

            const response = await fetch('/api/v1/posts', options);
            const responseJson = await response.json();
            if (responseJson) {

            }
        } catch(error) {
            console.log(error);
        }
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
                            onSubmit={(values, actions) => this.submit(values, actions)}
                        />
                    </Paper>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(PostForm);