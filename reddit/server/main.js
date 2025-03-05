import {Meteor} from 'meteor/meteor';
// Meteor import allows us access to Meteor.startup which waits for the server
// to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
// this gives us access to the UP_Collection_Access object so we can interact with the DB

// Meteor.publish() is a server-side function that controls which data is sent to the client. 
// It allows the client to subscribe to specific datasets from the server.
Meteor.publish("user_posts_collection", function() {
  return UP_Collection_Access.find();
});

// promise: an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// async function: Marks a function as asynchronous, allowing the use of 'await' inside it which will make the function "pause" until the promise is resolved or rejected.
Meteor.startup(async () =>{












  // The following allows the client to insert, remove, and update data from the collection
  // Allowing all inserts from the client is a Security risk
  // Anyone can open the browser console and run:
  // UP_Collection_Access.insert({ topic: "Hacked!", votes: 9999 });

  UP_Collection_Access.allow({
    insert(userId, doc) {
      return true; // Anyone can insert
    },
    remove(userId, doc) {
      return true; // Anyone can remove
    },
    update(userId, doc, fieldNames, modifier) {
      return true; // Anyone can update
    },
  });
});