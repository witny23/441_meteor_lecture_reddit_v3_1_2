import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';

// Meteor.subscribe is a client-side function that tells the server to send specific data to the client. 
// It is used to access collections that were published on the server.
Meteor.subscribe("user_posts_collection");

// the following is an empty array b/c DDP has not synched up with the two DB
console.log('Postings 1', UP_Collection_Access.find().fetch());

// hack fix - set a timeout
setTimeout(function(){
  console.log('Posting 2', UP_Collection_Access.find().fetch());
}, 1000);
// this is a bad solution because it only fires once
// if the data updates we wont see the update


// it is better to use a built in meteor function called Tracker
// Tracker tracks queries and reruns code when queries change
Tracker.autorun(function(){
  console.log('Posting 3', UP_Collection_Access.find().fetch());
});

const renderPosts = function (passed_posts) {
  console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
  });

  return formattedPosts;
};

Meteor.startup(function () {
  const posts =[{
        _id: '01',
        topic: 'cats',
        votes: 5,
      }, {
        _id: '02',
        topic: 'dogs',
        votes: 2,
      }, {
        _id: '03',
        topic: 'birds',
        votes: 11,
      }
  ];
  let title = '441 reddit';
  let jsx = (
    <div>
      <h1>{title}</h1>

      {/* renderPosts('hi') */}
      {renderPosts(posts)}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('content'));

});
