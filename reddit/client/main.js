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
    const allPostsInDB = UP_Collection_Access.find().fetch();
    let title = '441 reddit';

    ReactDOM.render(<App
        passedPropTitle={title}
        passedPropModerator={'newman'}
        passedPropAllPosts={allPostsInDB}
      />, document.getElementById('content'));

  });

});