import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
/* challenge code ***********************************************************/
import { Topic_Replies_Collection_Access } from './../imports/api/topic_replies.js';

Meteor.publish("user_posts_collection", function() {
  return UP_Collection_Access.find();
});
Meteor.publish("topic_replies_collection", function() {
  return Topic_Replies_Collection_Access.find();
});


Meteor.startup( () =>{
 






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
  Topic_Replies_Collection_Access.allow(allowAllOperations);
});

