import React from 'react';

/*
Import styling
*/
import logo from '../assets/images/logo.svg';
import './Page.css';

class PageLayout extends React.Component {
    render() {
        const { children, classes } = this.props;

        return (
            <div className="page">
                <header role="header">
                    HEADER
                </header>
                <main class="main" role="main">
                    { children }
                </main>
                <footer class="footer" role="footer">
                    FOOTER
                </footer>
            </div>
        )
    }
}
 
export default PageLayout;