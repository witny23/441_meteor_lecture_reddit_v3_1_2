import React from 'react';
import PropTypes from 'prop-types';

export default class Footer extends React.Component{

  render(){
    return (
      <div className='footer'>
        <div className='footer-wrapper'>{/* if we used wrapper, bg would be grey */}
          <p>{this.props.footerText}</p>
        </div>
      </div>
    );
  }
};

Footer.propTypes = {
  footerText: PropTypes.string.isRequired,
};