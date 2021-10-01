import React from 'react';
import { Link , useHistory} from 'react-router-dom';

const Post = (props) => {

const {title,id} = props.post
const history = useHistory();
const handleDetail = () => {

history.push(`/post/${id}`)

}





    return (
        <div>
            <h5>Individual Post</h5>
            <p>ID:{id}</p>
            <p>post title:{title}</p>
            <Link to ={`/post/${id}`}>Post Details</Link>
            <br/>
            <br/>
            <button onClick={handleDetail}>Click to Details</button>

        </div>
    );
};

export default Post;