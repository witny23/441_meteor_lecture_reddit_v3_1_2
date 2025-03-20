import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';

export default class TopicList extends React.Component {
  renderAllPosts(){
    if (this.props.passed_posts.length === 0){
      return (
        <div className = 'single-block-item-style'>
          <p className = 'single-block-item-style__message'>
              Add a new topic to get started
          </p>
          <p className = 'single-block-item-style__message single-block-item-style__message--empty'>
              Empty mssg with modifier
          </p>
        </div>
      );
    } else {
      return this.props.passed_posts.map((post) => {
        return <RenderPost key={post._id} post_prop_obj={post}/>
      });
    }

  }
  render(){
    return (
      <>
        {this.renderAllPosts()}
      </>
    )
  }

};

TopicList.propTypes ={
  passed_posts: PropTypes.array.isRequired,
};