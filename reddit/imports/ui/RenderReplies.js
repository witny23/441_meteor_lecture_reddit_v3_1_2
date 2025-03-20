import React from 'react';
import {Topic_Replies_Collection_Access} from './../api/topic_replies.js';
import PropTypes from 'prop-types';


export default class RenderReplies extends React.Component{

  render(){
    let single_item_class_name =
                `single-block-item-style
                single-block-item-style--position-${this.props.reply_prop_obj.rank}`;
/* challenge code ***********************************************************/
// the following handles links. It checks for an http and changes html as needed
    let possible_link = this.props.reply_prop_obj.reply_topic;
    if (this.props.reply_prop_obj.reply_topic.includes('http')){
      possible_link = <a href={this.props.reply_prop_obj.reply_topic}>{this.props.reply_prop_obj.reply_topic}</a>;
    };
    return (
      <>
        <div key={this.props.reply_prop_obj._id} className={single_item_class_name}>
          {/* below is a statement function */}
          <div className='post'>
            <div>
              <h3 className='post__topic'>{possible_link}</h3>
              <p className='post__stats'>{this.props.reply_prop_obj.total_reply_votes} total vote[s] <br />
              {this.props.reply_prop_obj.reply_up_votes} up <br /> {this.props.reply_prop_obj.reply_down_votes} down
                </p> {''/* single space before button hack */}
            </div>
            <div className='post__actions'>
              <button className='button button--round' onClick={() => {  // anonymous arrow function
                Topic_Replies_Collection_Access.update({_id: this.props.reply_prop_obj._id},
                  {$inc: {reply_up_votes: 1, total_reply_votes: 1}})}}>+1</button>
              <button className='button button--round' onClick={() => {
                Topic_Replies_Collection_Access.update({_id: this.props.reply_prop_obj._id},
                  {$inc: {reply_down_votes: 1, total_reply_votes: 1}})}}>-1</button>
              <button className='button button--round' onClick={() => {
                Topic_Replies_Collection_Access.remove({_id: this.props.reply_prop_obj._id})
              }}>X</button>
            </div>

          </div>
        </div>
      </>
    );
  }
};
RenderReplies.propTypes = {
  reply_prop_obj: PropTypes.object.isRequired,
};