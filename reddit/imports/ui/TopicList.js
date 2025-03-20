import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

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
        return <RenderPost key={post._id} post_prop_obj={post}/>
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