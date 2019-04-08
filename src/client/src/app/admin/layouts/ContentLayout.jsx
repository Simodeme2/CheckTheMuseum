import React from 'react';

/*
Import styling
*/
 
class ContentLayout extends React.Component {

  render() {
    return (
      <div>
          { this.props.children }
      </div>
    );
  }
}

export default (ContentLayout);