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


Meteor.startup(async function(){
    // await ensures each insertAsync() completes before moving to the next line.
    await UP_Collection_Access.insertAsync({
      topic: 'dog',
      votes: 9,
    });
    // await ensures each insertAsync() completes before moving to the next line.
    await UP_Collection_Access.insertAsync({
      topic: 'bird',
      votes: 93,
    });

  console.log(await UP_Collection_Access.find().fetch());
  // await ensures each insertAsync() completes before moving to the next line.
  // .find() returns everything
  // .fetch() is a pointer to some documents in the DB
  // to get an array of the documents you use .fetch()

});


// Allow all inserts from the client (Security risk)
// Anyone can open the browser console and run:
// UP_Collection_Access.insert({ topic: "Hacked!", votes: 9999 });
// this is in place for the purpose of the upcoming challenge
UP_Collection_Access.allow({
  insert(userId, doc) {
    return true; // Allows all clients to insert data
  },
});
