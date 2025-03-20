// import {named export} from '...';
import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

// to create a collection we use a constructor function

// new Mongo.Collection('user_posts_collection');

// takes the name of the collection you create
// an object is returned from this constructor which provides us with a
// bunch of methods for inserting, fetching, updating, fetching


// we want the collection to be available outside of this .js so we export it
export const UP_Collection_Access = new Mongo.Collection('user_posts_collection');
// this can now be imported in our server/main.js


export const Calculate_rank_and_position_for_posts = (user_posts_collection) => {
    // going to return a new user_posts_collection array with new properties
    // rank is 1st, 2nd, etc, position is 1, 2, 3, etc
    // this will be called from client/main.js
    // remember, the user_posts_collection is already in order (1st to last)
    let rank = 1; // when we iterate the collection, the first has a rank of 1
                  // we just need to increment by 1 for subsequent places

    return user_posts_collection.map((post, index) => {
      // one at a time, assign each user_posts_collection element to post
      // index - optional argument that provides the array index of the element
      // console.log(post.topic + ' ' + post.votes + ' ' + index);

      // time to increment rankings
      if(index !== 0 && user_posts_collection[index - 1].votes > post.votes) {
                        // did the previous post have more votes than current
        rank++;         // if so, add one to the rank of current post
      }                 // if they are tied, they both get the same rank


      return {    // return the new object we are creating
        ...post,  // ES6 object spread operator, the post object was passed in
        rank,     // ES6 object property shorthand for the variable rank
                  // could have been rank: rank;
        position: numeral(rank).format('0o'), // http://numeraljs.com/
      };
    });
};