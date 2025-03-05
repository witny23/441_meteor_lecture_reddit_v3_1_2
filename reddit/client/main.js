import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';

// Meteor.subscribe is a client-side function that tells the server to send specific data to the client. 
// It is used to access collections that were published on the server.
Meteor.subscribe("user_posts_collection");



const renderPosts = function (passed_posts) {
  // console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>;
  });

  return formattedPosts;
};


const processFormDataFunction = function(event){
  // the event (sometimes e) parameter is a default event handler object that is
  // passed in by the browser when an event occurs
  // this is an important argument becuase it allows us to access the topic name
  // which we need in order to insert a new topic into the db
  event.preventDefault() // stops the page from reloading
  let newTopic = event.target.formInputNameAttribute.value;
  // event.target grabs the target element - the form in this case which lets
  // us grab any of its inputs by referencing it by name (.formInputNameAttribute)
  // .value gets us the value
  // console.log(newTopic);
  if (newTopic){
    event.target.formInputNameAttribute.value = ''; // clear input box

    UP_Collection_Access.insertAsync({  // no await is okay because okay because this function is triggered by a form submission, and the main goal is to insert the data into the collection, but you don't necessarily need to block the rest of the form processing.
      topic: newTopic,
      votes: 0,
    });
  };
};


Meteor.startup(async function () { // async function: Marks a function as asynchronous. see server/main.js for more info 

  
  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(function(){
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

  