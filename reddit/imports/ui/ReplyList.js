import React from 'react';
import RenderReplies from './RenderReplies.js';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class ReplyList extends React.Component {
  renderAllReplies(){

      return this.props.passed_reply_props.map((reply) => {
        return <RenderReplies key={reply._id} reply_prop_obj={reply}/>
      });
    

  }
  render(){
    return (
      <>
        {/*this.renderAllReplies()*/}
        {/*<FlipMove>*/}
        <FlipMove delay={500 /* this is in milliseconds */}
                  leaveAnimation='accordionVertical'
                  maintainContainerHeight={true} /*stops the footer from
                                                  hopping on top of the last
                                                  topic when it is removed*/ >
          {this.renderAllReplies()}
        </FlipMove>
      </>
    )
  }

};

ReplyList.propTypes ={
  passed_reply_props: PropTypes.array.isRequired,
};