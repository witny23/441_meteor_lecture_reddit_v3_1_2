console.log('Log from /server/main.js');

// import './../imports/utils.js';
/*
import default_any_name from './../imports/utils.js';

console.log(default_any_name);
/*
import {say_hello} from './../imports/utils.js';    // this is a named import
import {add} from './../imports/math.js';           // this is a named import

console.log( say_hello() );

console.log( add(5, 3) );
*/


// we are not required to import anything - we can just import the default
import any_name_default from './../imports/math.js';

console.log(any_name_default(7, 2));
