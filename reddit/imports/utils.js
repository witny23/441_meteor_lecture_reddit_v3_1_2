console.log('Log from /imports/utils.js');


export let say_hello = function() {     // this is a named export
  return 'hello from imports/utils.js';
}

export let name = 'michael whitney';    // this is a named export

// every file that does some exporting can also export one and only one default value
//export default 'this is a default val from imports/utils.js';
// the defualt can be a function, object, boolean, number, or a string

// we are not allowed to export a default like the following
    // export default let someDefault = '....';

// what we need to do instead
let some_default = 'this is a default val from imports/utils.js';

export default some_default;
