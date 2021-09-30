import React, { useEffect, useState } from 'react';
import { Row } from 'reactstrap';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {

    const [friends,setFriends] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])




return (
        <div>
            <h2>i have total : {friends.length} friends</h2>
            {/* grid according to normal bootstrap
            <div className="row row-cols-md-4 g-4">
            {friends.map(friend => <Friend friend={friend} key={friends.id}></Friend> )}
            </div> */}

            {/* grid according to reactstrap  */}

            {/* <Row md={3}  className="g-4">
            {friends.map(friend => <Friend friend={friend} key={friends.id}></Friend> )}
            </Row> */}
            
            <div className="friend-container">
            {friends.map(friend => <Friend friend={friend} key={friends.id}></Friend> )}
            </div>



        </div>
    );
};

export default Friends;