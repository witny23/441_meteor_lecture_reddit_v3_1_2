import React from 'react';
import RenderPost from './RenderPost.js';
import PropTypes from 'prop-types';

export default class TopicList extends React.Component {
renderAllPosts(){
    return this.props.passed_posts.map((post) => {
    return <RenderPost key={post._id} post_prop_obj={post}/>
    });
}
render(){
    return (
    <>
        {this.renderAllPosts()}
    </>
    )
}

};

TopicList.propTypes ={
passed_posts: PropTypes.array.isRequired,
};