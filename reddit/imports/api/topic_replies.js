import {Mongo} from 'meteor/mongo';

// the following is creating access to the ddp collection.
// this must be imported in the server/main.js so the server can access the mongoDB
export const Topic_Replies_Collection_Access =
                        new Mongo.Collection('topic_replies_collection');


export const Calculate_rank = (passed_collection) => {
    let rank = 1;
    return passed_collection.map((reply, index) => {

      if(index !== 0 && passed_collection[index - 1].total_reply_votes > reply.total_reply_votes) {
        rank++;
      }


      return {    // return the new object we are creating
        ...reply,  // ES6 object spread operator, the reply object was passed in
        rank,     // ES6 object property shorthand for the variable rank
                  // could have been rank: rank;
      };
    });
};