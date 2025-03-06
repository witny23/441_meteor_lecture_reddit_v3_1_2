import {Meteor} from 'meteor/meteor';
// Meteor import allows us access to Meteor.startup which waits for the server
// to finish processing everything before the code inside of startup is run

import {UP_Collection_Access} from './../imports/api/user_posts.js';
// this gives us access to the UP_Collection_Access object so we can interact with the DB

// Meteor.publish() is used on the server side to specify which data is available to the client. 
// This publication allows the client to subscribe to the 'user_posts_collection' data.
Meteor.publish("user_posts_collection", function() {
  return UP_Collection_Access.find();
});

// promise: an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// async function: Marks a function as asynchronous, allowing the use of 'await' inside it which will make the function "pause" until the promise is resolved or rejected.
Meteor.startup(async function(){
    // insertAsync() is an asynchronous function, and await ensures that it completes before continuing to the next line of code
    // UP_Collection_Access.insertAsync({
    //   topic: 'dog',
    //   votes: 9,
    // });
    // UP_Collection_Access.insertAsync({
    //   topic: 'bird',
    //   votes: 93,
    // });

    console.log(await UP_Collection_Access.find().fetch());
    // 'await' is used here to wait for the asynchronous 'find().fetch()' operation to complete before logging the collection data.
    // await ensures each insertAsync() completes before moving to the next line.
    // .find() returns everything
    // .fetch() is a pointer to some documents in the DB
    // to get an array of the documents you use .fetch()









  
  // The following method allows the client to insert, remove, and update data from the collection.
  // **WARNING**: Allowing all operations from the client is a security risk, as any user can modify the data.
  // For example, someone can run: UP_Collection_Access.insert({ topic: "Hacked!", votes: 9999 });

  const allowAllOperations = {
    insert(userId, doc) {
      return true; // Anyone can insert
    },
    remove(userId, doc) {
      return true; // Anyone can remove
    },
    update(userId, doc, fieldNames, modifier) {
      return true; // Anyone can update
    },
  };

  // Assign the allowAllOperations rules to both collections.
  UP_Collection_Access.allow(allowAllOperations);
});
