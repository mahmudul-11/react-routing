import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
  
    const {id,name,email,website} = props.friend

    const design={
        border:"2px solid blue",
        borderRadius:"10px"
    }
    return (
        <div style={design}>
            <h2>{name} {id}</h2>
            <h5>{email}</h5>
            <h4>{website}</h4>
            <Link to={`friend/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default Friend;