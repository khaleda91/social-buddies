import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const{friendId} = useParams();
     const[friend, setFriend] = useState({});


    useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data))

    });



    return (
        <div>
            <p>this is friend :{friendId}</p>
            <h3>{friend.name}</h3>
            <h3>{friend.email}</h3>
            <h2>{friend.phone}</h2>

        </div>
    );
};

export default FriendDetail;