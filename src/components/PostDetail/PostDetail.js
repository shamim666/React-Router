import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostDetail = () => {

const [post , setPost] = useState({})

const {postID} = useParams();

const history = useHistory();

const handlePosts = () =>{
    history.push(`/posts`)
}

useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(res => res.json())
    .then(data => setPost(data))
} , [])


    return (
        <div>
            <h2>Post Details</h2>
            <p>post ID: {post.id}</p>
            <p>post title: {post.title}</p>
            <p>post Details: {post.body}</p>
            <button onClick={handlePosts}>Go to Posts</button>
        </div>
    );
};

export default PostDetail;