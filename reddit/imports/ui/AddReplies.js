import React from 'react';Topic_Replies_Collection_Access
// import {User_Replies_Collection_Access} from './../api/user_replies.js';
import {Topic_Replies_Collection_Access} from '../api/topic_replies.js';
// import {UP_Collection_Access} from './../api/user_posts.js';
// import {UP_Collection_Access, Topic_Replies_Collection_Access} from './../api/user_posts.js';


export default class AddReplies extends React.Component{

  processTopicReply(event){
    event.preventDefault()
    let newReply = event.target.formInputReplyAttribute.value;
    console.log(newReply);
    if (newReply){
      event.target.formInputReplyAttribute.value = '';
      Topic_Replies_Collection_Access.insert({
        reply_topic: newReply,
        reply_up_votes: 0,
        reply_down_votes: 0,
        total_reply_votes: 0,
				post_id: this.props.post_id
      });

    };
  }

  render(){
    return (
      <div className='single-block-item-style'>
        <form className='form' onSubmit={this.processTopicReply.bind(this)}>
          <input className='form__input' type='text'
                 name='formInputReplyAttribute'
                placeholder='Witty reply'/>
          <button className='button'>Add Reply</button>
        </form>
      </div>
    );
  }
};