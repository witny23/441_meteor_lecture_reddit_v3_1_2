import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';


export default class RenderPost extends React.Component{

  render(){
    return (
      <>
        <p key={this.props.post_prop_obj._id}>
          {this.props.post_prop_obj.topic} have {this.props.post_prop_obj.votes} vote[s] {''/* single space before button hack */}
          {/* below is a statement function */}
          <button onClick={() => {  // anonymous arrow function
            UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: 1}})
          }}>+1</button>
          <button onClick={() => {
            UP_Collection_Access.update({_id: this.props.post_prop_obj._id}, {$inc: {votes: -1}})
          }}>-1</button>
          <button onClick={() => {
            UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
          }}>X</button>
        </p>
      </>
    );
  }
};