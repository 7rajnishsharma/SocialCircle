import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/users/friends', {
                headers: { Authorization: token }
            });
            setFriends(response.data);
        };
        fetchFriends();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Friends List</h2>
            <ul>
                {friends.map(friend => (
                    <li key={friend._id} className="border-b py-2">{friend.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;