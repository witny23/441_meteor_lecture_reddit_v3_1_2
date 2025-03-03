import {Meteor} from 'meteor/meteor';
// Meteor import allows us access to Meteor.startup which waits for the server
// to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
// this gives us access to the UP_Collection_Access object so we can interact with the DB


Meteor.startup(function(){
    UP_Collection_Access.insert({
      topic: 'dog',
      votes: 9,
    });

    UP_Collection_Access.insert({
      topic: 'bird',
      votes: 93,
    });

  console.log(UP_Collection_Access.find().fetch());
  // .find() returns everything
  // .fetch() is a pointer to some documents in the DB
  // to get an array of the documents you use .fetch()

});
