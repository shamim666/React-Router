import React from 'react';
import { Link , useHistory } from 'react-router-dom';
import { Col } from 'reactstrap';

const Friend = (props) => {
    const {name , email , website , address ,id } = props.friend
    const history = useHistory();


const handleVisitMe = () => {

  history.push(`/friend/${id}`)
}




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
            {/* to show link  */}
            <Link to = {`/friend/${id}`} > Visit me</Link>
            {/* to show button */}
            <br /><br />
            <Link to = {`/friend/${id}`}>
            <button> Visit me </button>
            </Link>
            <button onClick={handleVisitMe}> Visit me Event handler</button>
            
        </div>
    );
};

export default Friend;