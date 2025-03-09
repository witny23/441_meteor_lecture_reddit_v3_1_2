import React from 'react'; // specify the module and then specify the library name
                            // meteor takes care of the rest
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor'; // named export from Meteor
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from './../imports/ui/AddTopics.js';
import RenderPost from './../imports/ui/RenderPost.js';

Meteor.subscribe("user_posts_collection");


const renderPosts =  (passed_posts) =>  {
  let formattedPosts = passed_posts.map((post) => {
    return <RenderPost key={post._id} post_prop_obj={post}/>
  });

  return formattedPosts;
};

Meteor.startup(() =>  {

  // Tracker tracks queries and reruns code when queries change
  Tracker.autorun(() => {
    const allPostsInDB = UP_Collection_Access.find().fetch();
    let title = '441 reddit';
    let jsx = (
      <div>
        <TitleBar title={title} moderator='newman'/>
        <AddTopics />
        {renderPosts(allPostsInDB)}
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('content'));

  });

});