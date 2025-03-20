import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';


Meteor.publish("user_posts_collection", function() {
  return UP_Collection_Access.find();
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
});



// Two new ES6 Features
//  - Object Spread Operator
//  - Object Property Shorthand


// Object Spread Operator example
//  - allows one to copy all the properties of one object onto another object

let person_one = {
  name: 'Newman',
  company: 'Post Office',
  fav_num: 43,
}
console.log(person_one);

let person_two = {
  fav_num: 23,
}
console.log(person_two);  // expect to see { age: 23 } show up in terminal


let person_three = {// Object Spread Operator allows us to spread out an
  ...person_one,    // object's properties into another object
  fav_num: 17,      // notice the ... which is the spread syntax
}                   // also note that fav_num was updated to 17
console.log(person_three)


// Object Property Shorthand example
//  - a way to define object properties when you have a variable w/ same name

let pet = 'cat';
let type = 'tabby';
let animal = {
  pet: pet, // value of pet getting set with a variable of the same name
  type,     // since the name is the same, we can use this shorthand
}
console.log(animal);



// mini challenge using Object Spread Operator and Object Property Shorthand


let car = {
  color: 'green',
  doors: 2,
}
let car_year = 1999;

// mini challenge
// - create a new object then console log that object so it will
//    look like the following when logged

//      { color: 'red', doors: 2, car_year: 1999, make: 'AMC' }

// notice the color changed, doors stayed the same, car_year variable was used
//  and a new make: 'AMC' property was created

//  make sure to use Object Spread Operator and Object Property Shorthand
//    to recreate the previous object




console.log({
  ...car,         // object spread
  color: 'red',   // overwrite color
  car_year,       // object property shorthand
  make: 'AMC',    // new property
})