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
Meteor.startup(async function(){
    // insertAsync() is an asynchronous function, and await ensures that it completes before continuing to the next line of code
    // await UP_Collection_Access.insertAsync({
    //   topic: 'dog',
    //   votes: 9,
    // });
    // await UP_Collection_Access.insertAsync({
    //   topic: 'bird',
    //   votes: 93,
    // });

  console.log(await UP_Collection_Access.find().fetch());
  // 'await' is used here to wait for the asynchronous 'find().fetch()' operation to complete before logging the collection data.
  // .find() returns everything
  // .fetch() is a pointer to some documents in the DB
  // to get an array of the documents you use .fetch()






  // the following is in place for future work / challenges. 
  // It allows the client to insert data directly into the mongoDB
  // Allowing all inserts from the client is a Security risk
  // Anyone can open the browser console and run:
  // UP_Collection_Access.insert({ topic: "Hacked!", votes: 9999 });

  UP_Collection_Access.allow({
    insert(userId, doc) {
    return true; // Allows all clients to insert data
    },
  });
});