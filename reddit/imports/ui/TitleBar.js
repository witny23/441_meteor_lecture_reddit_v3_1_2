import React from 'react';
 
 
 export default class TitleBar extends React.Component{ // jsx requires uppercase when working with components
   // by default react components only need to define one method and it is not the constructor
   // it is a render method - this returns the jsx that is returned to the screen
   render(){
     return (
       <>
         <h1>441 reddit</h1>
       </>
     );
   }
 }; 