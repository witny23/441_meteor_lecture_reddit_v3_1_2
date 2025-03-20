import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';
/* challenge code ***********************************************************/
import {Topic_Replies_Collection_Access} from './../api/topic_replies.js';
import AddReplies from './AddReplies.js';
import ReplyList from './ReplyList.js';


export default class RenderPost extends React.Component{

  render(){
    let single_item_class_name =
                `single-block-item-style
                single-block-item-style--position-${this.props.post_prop_obj.rank}`;
/* challenge code ***********************************************************/
// the following handles links. It checks for an http and changes html as needed
    let possible_link = this.props.post_prop_obj.topic;
    if (this.props.post_prop_obj.topic.includes('http')){
      possible_link = <a href={this.props.post_prop_obj.topic}>{this.props.post_prop_obj.topic}</a>;
    };

    return (
      <>
        <div key={this.props.post_prop_obj._id} className={single_item_class_name}>
          <div className='post'>
            <div>
              <p className='post__stats'>
                {this.props.post_prop_obj.up_votes} up vote[s] <br />{this.props.post_prop_obj.down_votes} down vote[s]
              </p> {''}
              <h3 className='post__topic'>{possible_link}</h3>

            </div>
            <div className='post__actions'>
              <button className='button button--round' onClick={() => {
                // the following updates the up_votes and down_votes
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {up_votes: 1}})}}>+1</button>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.update({_id: this.props.post_prop_obj._id},
                  {$inc: {down_votes: +1}})}}>-1</button>
              <button className='button button--round' onClick={() => {
                UP_Collection_Access.remove({_id: this.props.post_prop_obj._id})
                // if delete post, should delete replies as the original post is gone
                // the following takes the reply array and one at a time,
                //   deletes them from the replies collection
                this.props.reply_prop_array.map((reply) => {
                  Topic_Replies_Collection_Access.remove({_id: reply._id})
                });

              }}>X</button><br /><br /><br />
            </div>
          </div>
{/* challenge code ***********************************************************/}
          <AddReplies post_id={this.props.post_prop_obj._id}/>
          <ReplyList passed_reply_props={this.props.reply_prop_array}/>
        </div>
      </>
    );
  }
};
RenderPost.propTypes = {
  post_prop_obj: PropTypes.object.isRequired,
};