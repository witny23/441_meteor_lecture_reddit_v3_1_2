import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import App from './../imports/ui/App.js';

Meteor.subscribe("user_posts_collection");


Meteor.startup(() =>  {

  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(() => {
    // let allPostsInDB = UP_Collection_Access.find().fetch();
    // let allPostsInDB = UP_Collection_Access.find({votes: 3}).fetch();
    // the previous returns all topics that have 3 votes
    // change the votes to something else and they disappear

    let allPostsInDB = UP_Collection_Access.find({/*emty so get all posts */},
                                                  {sort: {votes: -1}}).fetch();
    // the second argument {sort} is the options object
        let title = '441 reddit';

    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropModerator={'newman'}
        passedPropAllPosts={allPostsInDB}
      />, document.getElementById('content'));

  });

});