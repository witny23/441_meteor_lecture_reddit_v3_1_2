import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor


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
