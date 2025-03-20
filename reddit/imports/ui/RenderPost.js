import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';


export default class RenderPost extends React.Component{

  render(){
    let single_item_class_name =
                `single-block-item-style
                single-block-item-style--position-${this.props.post_prop_obj.rank}`;
    return (
      <>
        <div key={this.props.post_prop_obj._id} className={single_item_class_name}>
          {/* below is a statement function */}
          <div className='post'>
            <div>
              <h3 className='post__topic'>{this.props.post_prop_obj.topic}</h3>
              <p className='post__stats'>
                {this.props.post_prop_obj.position} place
                with {this.props.post_prop_obj.votes} vote[s]</p> {''/* single space before button hack */}
            </div>
            <div className='post__actions'>
              <button className='button button--round' onClick={() => {  // anonymous arrow function
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {votes: 1}})}}>+1</button>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {votes: -1}})}}>-1</button>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
              }}>X</button>
            </div>

          </div>
        </div>
      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};