import React from 'react';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  render() {
    return (
      <>
        <TitleBar
          title={this.props.passedPropTitle}
          moderator={this.props.passedPropModerator}/>
       {/* wrap AddTopic and TopicList with a div that utilizes the wrapper class */}
        <div className='wrapper'>
          <AddTopics />
          <TopicList passed_posts={this.props.passedPropAllPosts}/>
        </div>
      </>
    )
  }

};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired
};