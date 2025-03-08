import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';


Meteor.publish("user_posts_collection", function() {
  return UP_Collection_Access.find();
});

Meteor.startup(async () =>{
    
  // convention is to capitalize class names
  class Person {

  };

  let me = new Person();// this will create an empty object which is
                        // expected because there is no data for this person
  console.log(me);

  class Person2 {
    constructor(name){	// constructor called behind scenes
      // so far the name is not stored on the Person instance. The following does that
      this.name = name;
      // every instance can have a different name and its stored in name
    }
  }	// no comma or semi – this is correct class definition for ES6

  let me2 = new Person2('Michael');	// this is passes to the class's constructor function
  console.log(me2);

  class Person3 {
    constructor(name = 'anonymous'){
      this.name = name;
    }
  }
  let me3 = new Person3(); // will print anonymous
  let me3b = new Person3('passed name'); // will print anonymous
  console.log(me3, me3b);

  // the following sets up a method
  class Person4 {
    constructor(name = 'anonymous'){
      this.name = name;
    }
    getGreeting(){  // return custom greeting using their name
                    // will use ES6 template strings
                    // these are designed to make it easy to inject values into a string
                    // will use the back tick which is to the left of the 1 key
                    // return 'hi, I am ' + this name'; will work but template strings are better
      return `hi, I am ${this.name}`; // this is a js expression
    }
  }
  let me4 = new Person4();  // will print anonymous

  console.log(me4.getGreeting());

  /*
  Basics of class - define a class, define a constructor function which sets up
                    initial data, define a set of custom methods available to the class
                    THese methods can use the class's data
  */

  class Person5 {
    constructor(name = 'anonymous', age = 0){
      this.name = name;
      this.age = age;
    }
    getGreeting(){
      return `hi, I am ${this.name}`;
    }
    getPersonDesctiption(){
      return `${this.name} is ${this.age}`;
    }
  }
  let me5 = new Person5('newman', 23);

  console.log(me5.getGreeting());
  console.log(me5.getPersonDesctiption());                   





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
