import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';

// Meteor.subscribe is a client-side function that tells the server to send specific data to the client. 
// It is used to access collections that were published on the server.
Meteor.subscribe("user_posts_collection");



const renderPosts =  (passed_posts) =>  {
  let formattedPosts = passed_posts.map((post) => {
    return (
      <p key={post._id}>
        {post.topic} have {post.votes} vote[s] {''/* single space before button hack */}
        {/* below is a statement function */}
        <button onClick={() => {  // anonymous arrow function
          UP_Collection_Access.update({_id: post._id}, {$inc: {votes: 1}})
        }}>+1</button>
        <button onClick={() => {
          UP_Collection_Access.update({_id: post._id}, {$inc: {votes: -1}})
        }}>-1</button>
        <button onClick={() => {
          UP_Collection_Access.remove({_id: post._id})
        }}>X</button>
      </p>
    );
  });

  return formattedPosts;
};

const processFormDataFunction = (event) => {
  event.preventDefault()
  let newTopic = event.target.formInputNameAttribute.value;
  if (newTopic){
    event.target.formInputNameAttribute.value = ''; // clear input box
    UP_Collection_Access.insert({
      topic: newTopic,
      votes: 0,
    });

  };
};

Meteor.startup(() =>  {

  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(() => {
    const allPostsInDB = UP_Collection_Access.find().fetch();
    let title = '441 reddit';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <form onSubmit={processFormDataFunction}>
          <input type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button>Add Topic</button>
        </form>

        {renderPosts(allPostsInDB)}
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('content'));

  });




});