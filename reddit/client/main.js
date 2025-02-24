import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function () {

  // basic function that does not accept any parameters
  const renderSomeParagraphs = function () {
    // return [<p>p 1</p>,<p>p 2</p>,<p>p 3</p>];
    return [<p key='1'>p 1</p>,<p key='2'>p 2</p>,<p key='3'>p 3</p>];
  };

  const renderArrayMap = function () {
    let numbers = [{val: 1}, {val: 2},{val: 3}];
    // the following is an array map which is an array method
      // basically, it is going to process the numbers array
      // one at a time - each array entry (e.g., val:1) is assigned to number
    let newNumbers = numbers.map(function(number){
      return number.val - 1;
    });
    console.log(newNumbers);
  };

  const renderPosts = function (passed_posts) {
    console.log(passed_posts);
    let numbers = [{val: 11}, {val: 23},{val: 37}];
    let newNumbers = numbers.map(function(number){
      return <p key={number.val}>{number.val}</p>;
    });

    return newNumbers;
  };

  let title = '441 reddit';
  let jsx = (
         <div>
            <h1>{title}</h1>
            {/* the following is static but in the future it will be dynamic b/c it will come from db */}
            {/* [<p>p 1</p>,<p>p 2</p>,<p>p 3</p>] */}
            {/* notice the previous gives us a warning in the console
                - this is b/c each child in the array should have a unique prop */}
            {/* [<p key='1'>p 1</p>,<p key='2'>p 2</p>,<p key='3'>p 3</p>] */}

            {renderSomeParagraphs()}
            {renderArrayMap()}
            {renderPosts('hi')}
         </div>
        );

  ReactDOM.render(jsx, document.getElementById('content'));


});
