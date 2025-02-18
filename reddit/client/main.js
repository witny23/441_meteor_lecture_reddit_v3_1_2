console.log('Log from /client/main.js');

// we previously had the following named imports
// import { say_hello, name } from './../imports/utils.js';
// in order to import a default we will have to add something before the named imports
import any_name_default_var, {say_hello, name} from './../imports/utils.js'; // multiple named imports
// we can rename this default to anything we want. Use something that makes sense

console.log(any_name_default_var);

// we are not required to import anything - we can just import the default
// import defaultVariableNameYouChoose from './../imports/utils.js';
// console.log(defaultVariableNameYouChoose);


/*
console.log( say_hello() );
console.log( name );
*/
