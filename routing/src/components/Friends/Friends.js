import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>setFriends(data))
    },[])
    const design2={
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gridGap:"10px",
        margin:"10px"
    }
    return (
        <div style={design2}>
           {
               friends.map(friend => <Friend friend={friend} key={friend.id} ></Friend>)
           }
        </div>
    );
};

export default Friends;