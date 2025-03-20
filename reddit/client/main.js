import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access}
        from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';


Meteor.subscribe("user_posts_collection");
Meteor.subscribe("topic_replies_collection");


Meteor.startup(() =>  {

  Tracker.autorun(() => {

/* challenge code ***********************************************************/
// using date_added so most recent is on top
    let allPostsInDB = UP_Collection_Access.find({/*emty so get all posts */},
                                              {sort: {date_added: -1}}).fetch();
    let title = '441 reddit';


    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropModerator={'newman'}
        passedPropAllPosts={allPostsInDB}
        passedFooter={'\u00A9 441 reddit'/* \u00A9 unicode sequence for copyright */}
      />, document.getElementById('content'));

  });

});