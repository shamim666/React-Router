

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {

    const {ID} = useParams();

const [friend , setFriend] = useState({})


    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${ID}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setFriend(data))
    },[])
    return (
        <div>
            <h3>My Friend ID: {ID}</h3>
            <p>name:{friend.name}</p>
            <p>phone:{friend.phone}</p>
            <p>Website:{friend.website}</p>
            <p>Works at:{friend.company?.name}</p>
        </div>
    );
};

export default FriendDetails;