import React from 'react';
import { useParams } from 'react-router';

const FriendsDetails = () => {
    const {fId}=useParams()
    return (
        <div>
            This is friend Detais{fId}
        </div>
    );
};

export default FriendsDetails;