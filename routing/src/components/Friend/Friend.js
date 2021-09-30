import React from 'react';

const Friend = (props) => {
    const {name,email,website} = props.friend

    const design={
        border:"2px solid blue",
        borderRadius:"10px"
    }
    return (
        <div style={design}>
            <h2>{name}</h2>
            <h5>{email}</h5>
            <h4>{website}</h4>
        </div>
    );
};

export default Friend;