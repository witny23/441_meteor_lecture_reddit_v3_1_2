import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';


Meteor.publish("user_posts_collection", function() {
  return UP_Collection_Access.find();
});

Meteor.startup( () =>{
 
  class Person5 {
    constructor(name = 'anonymous', age = 0){
      this.name = name;
      this.age = age;
    }
    getGreeting(){
      return `hi, I am ${this.name}`;
    }
    getPersonDescription(){
      return `${this.name} is ${this.age}`;
    }
  }

  class Employee extends Person5 {// this means Employee is identical to Person5

  }

  let me5 = new Person5('newman', 23);

  console.log(me5.getGreeting());
  console.log(me5.getPersonDescription());

  let me6 = new Employee ('chris', 44);
  console.log(me6.getPersonDescription());


  // Let's create an Employee2 class and pass a job title into the Employee2 constructor

  class Employee2 extends Person5 { // this means Employee is identical to Person5
    constructor(name, age, title) { // get name/age from super and title has no def in case no job
      super(name, age);  // this calls the parent constructor and asks for name and age
      this.title = title;
    }
    hasJob(){
      // this.title;  // string or undifined but we want a boolean if they did or did not enter data
      return !!this.title;  // this flips twice. First to if undefined (true)
                            // second is to false - no job
    }
  }
  let me7 = new Employee2('pat', 55, 'driver');  // we need a constructor that can handle thee args
  console.log(me7.getPersonDescription());  // this is coming from Person5
  console.log('has job:', me7.hasJob());  // this is testing the extra argument


  // Aside from creating our own functions, we can override functions - we do this with getGreeting
  // same as the constructor, just name it again in the sub

  class Employee3 extends Person5 { // this means Employee is identical to Person5
    constructor(name, age, title) { // get name/age from super and title has no def in case no job
      super(name, age);  // this calls the parent constructor and asks for name and age
      this.title = title;
    }
    getPersonDescription(){// if they don't have a title, use parent's desc. If title, then use this getGreeting
      if(this.title){ // checks if title exists
        return `hi, this is ${this.name} and I am a[n] ${this.title}`;
      } else {
        return super.getPersonDescription();
      }
    }
  }

  let me8 = new Employee3('des', 19, 'actor');
  console.log(me8.getPersonDescription());
  let me9 = new Employee3('pam', 88); // test the if/else in the Employee class
  console.log(me9.getPersonDescription());



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