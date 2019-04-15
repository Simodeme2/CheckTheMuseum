/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Import internal libraries
*/
import PostsList from '../../components/posts-list';

class HomePage extends Component {
    render() {
        return (
            <div>
                <PostsList />
            </div>
        )
    }
}

export default (HomePage);