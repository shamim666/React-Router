import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

const Friend = (props) => {
    const {name , email , website , address ,id } = props.friend

    const styleFriend = {
        border: "2px solid tomato",
        borderRadius: "10px",
        padding : "10px"
    }

    return (
        <div style={styleFriend}>
           
            <h5>Name:{name} : {id}</h5>
            <p>Email:{email}</p>
            <p>Website:{website}</p>
            <p>Address:{address.city}</p>
            <Link to = {`/friend/${id}`} > Visit me</Link>
        </div>
    );
};

export default Friend;