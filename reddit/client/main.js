import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';

// Meteor.subscribe is a client-side function that tells the server to send specific data to the client. 
// It is used to access collections that were published on the server.
Meteor.subscribe("user_posts_collection");



const renderPosts = function (passed_posts) {
  console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
  });

  return formattedPosts;
};

Meteor.startup(function () { 
  UP_Collection_Access.insert({
    topic: 'kids',
    votes: 5,
  });  
  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(function(){
    const posts = UP_Collection_Access.find().fetch();
    let title = '441 reddit';
    let jsx = (
      <div>
        <h1>{title}</h1>
        {renderPosts(posts)}
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('content'));

  });

});

  