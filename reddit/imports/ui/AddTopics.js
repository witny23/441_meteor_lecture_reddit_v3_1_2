import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';


export default class AddTopics extends React.Component{

  processFormData(event){
    event.preventDefault()
    let newTopic = event.target.formInputNameAttribute.value;
    if (newTopic){
      event.target.formInputNameAttribute.value = '';
      UP_Collection_Access.insert({
        topic: newTopic,
/* challenge code ***********************************************************/        
        up_votes: 0,  // decided to track up votes and down votes
        down_votes: 0,
        date_added: new Date(), //https://docs.mongodb.com/manual/reference/method/Date/

      });

    };
  }

  render(){
    return (
      <div className='single-block-item-style'>
        {/*this.props.children*/}
        {/*access a prop that we did not pass in - .children which is a built
           in prop*/}
        <form className='form' onSubmit={this.processFormData.bind(this)}>
          <input className='form__input' type='text' name='formInputNameAttribute' placeholder='Topic Name'/>
          <button className='button'>Add Topic</button>
        </form>
      </div>
    );
  }
};