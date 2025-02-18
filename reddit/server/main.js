console.log('Log from /server/main.js');

// import './../imports/utils.js';
import {say_hello} from './../imports/utils.js';    // this is a named import
import {add} from './../imports/math.js';           // this is a named import

console.log( say_hello() );

console.log( add(5, 3) );
