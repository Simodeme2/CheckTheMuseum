/*
Import external libraries
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

/*
Styling
*/
const styles = theme => ({

});

class PostsLists extends Component {
    state = {
        posts: [],
    }

    componentWillMount() {
        this.loadPosts();
    }

    loadPosts = () => {
        fetch('/api/v1/posts')
          .then( response => response.json())
          .then( items => this.setState({ posts: items })); 
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
                {posts && posts.map( (post, index) => (
                    <article className="post--small">
                        <h1 className="post__title">{ post.title }</h1>
                        <section className="post__synopsis">{ post.synopsis }</section>
                        <section className="post__body">{Parser(post.body)}</section>
                    </article>
                ))}
            </div>
        );
    }
}

PostsLists.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default (PostsLists);