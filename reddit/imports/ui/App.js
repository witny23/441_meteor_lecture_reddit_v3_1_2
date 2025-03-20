import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import Footer from './Footer.js';

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
        <Footer footerText={this.props.passedFooter} />
      </>
    )
  }

};

App.propTypes = {
  passedPropTitle: PropTypes.string.isRequired,
  passedPropAllPosts: PropTypes.array.isRequired
};