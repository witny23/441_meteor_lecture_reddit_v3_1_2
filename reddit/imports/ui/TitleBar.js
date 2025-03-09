import React from 'react';
import PropTypes from 'prop-types';

// need to export TitleBar class
export default class TitleBar extends React.Component{ 
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>moderator: {this.props.moderator}</p>
      </div>
    );
  }
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  moderator: PropTypes.string.isRequired,
};