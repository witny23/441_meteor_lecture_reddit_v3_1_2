import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';


export default class RenderPost extends React.Component{

  render(){
    return (
      <>
        <div key={this.props.post_prop_obj._id} className='single-block-item-style'>
          {/* below is a statement function */}
          <button onClick={() => {  // anonymous arrow function
            UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
              {$inc: {votes: 1}})}}>+1</button>
          <button onClick={() => {
            UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
              {$inc: {votes: -1}})}}>-1</button>
          <button onClick={() => {
            UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
          }}>X</button>
          {this.props.post_prop_obj.topic} have {this.props.post_prop_obj.votes} vote[s] {''/* single space before button hack */}
        </div>
      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};