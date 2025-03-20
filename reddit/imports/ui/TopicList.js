import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
/* challenge code ***********************************************************/
import {Topic_Replies_Collection_Access, Calculate_rank}
                        from './../api/topic_replies.js';

export default class TopicList extends React.Component {
  renderAllPosts(){
    if (this.props.passed_posts.length === 0){
      return (
        <div className = 'single-block-item-style'>
          <p className = 'single-block-item-style__message'>
              Add a new topic to get started
          </p>
        </div>
      );
    } else {
      return this.props.passed_posts.map((post) => {
/* challenge code ***********************************************************/
// use post._id for each topic to serch the replies collection
        let Single_Topic_Replies =
            Topic_Replies_Collection_Access.find({post_id: post._id},
                                      {sort: {total_reply_votes: -1}}).fetch();
        // position the replies so their place can be used for different backgrounds
        let positioned_replies = Calculate_rank(Single_Topic_Replies);
        // pass the array of replies to the RenderPost.js along
        // with the original post obj
        return <RenderPost key={post._id} post_prop_obj={post}
                           reply_prop_array={positioned_replies}/>
      });
    }

  }
  render(){
    return (
      <>
        {/*this.renderAllPosts()*/}
        {/*<FlipMove>*/}
        <FlipMove delay={500 /* this is in milliseconds */}
                  leaveAnimation='accordionVertical'
                  maintainContainerHeight={true} /*stops the footer from
                                                  hopping on top of the last
                                                  topic when it is removed*/ >
          {this.renderAllPosts()}
        </FlipMove>
      </>
    )
  }

};

TopicList.propTypes ={
  passed_posts: PropTypes.array.isRequired,
};