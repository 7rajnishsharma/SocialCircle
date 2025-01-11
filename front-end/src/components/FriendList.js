import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const [friendRequests, setFriendRequests] = useState([]);
    const [error, setError] = useState(null);
    const [searchUsername, setSearchUsername] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const userId = localStorage.getItem('userId'); // Replace with the actual user ID retrieval method

    const fetchFriends = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/friends/${userId}`);
            setFriends(response.data);
        } catch (error) {
            setError('Failed to fetch friends');
            console.error('Error fetching friends:', error);
        }
    }, [userId]);

    const fetchFriendRequests = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/friend-requests/${userId}`);
            setFriendRequests(response.data);
        } catch (error) {
            setError('Failed to fetch friend requests');
            console.error('Error fetching friend requests:', error);
        }
    }, [userId]);

    useEffect(() => {
        fetchFriends();
        fetchFriendRequests();
    }, [fetchFriends, fetchFriendRequests]);

    const sendFriendRequest = async (receiverId) => {
        try {
            await axios.post('http://localhost:8080/api/auth/send-friend-request', {
                senderId: userId,
                receiverId,
            });
            fetchFriendRequests(); // Refresh friend requests
        } catch (error) {
            setError('Failed to send friend request');
            console.error('Error sending friend request:', error);
        }
    };

    const acceptFriendRequest = async (friendId) => {
        try {
            await axios.post('http://localhost:8080/api/auth/accept-friend-request', {
                userId,
                friendId,
            });
            fetchFriends(); // Refresh friends list
            fetchFriendRequests(); // Refresh friend requests
        } catch (error) {
            setError('Failed to accept friend request');
            console.error('Error accepting friend request:', error);
        }
    };

    const rejectFriendRequest = async (friendId) => {
        try {
            await axios.post('http://localhost:8080/api/auth/reject-friend-request', {
                userId,
                friendId,
            });
            fetchFriendRequests(); // Refresh friend requests
        } catch (error) {
            setError('Failed to reject friend request');
            console.error('Error rejecting friend request:', error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/auth/search?username=${searchUsername}`);
            setSearchResults(response.data); // Set the search results
        } catch (error) {
            setError('Failed to search for users');
            console.error('Error searching for users:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center text-center">Friends List</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            
            <h2 className="text-xl font-bold mt-4 text-center">Send Friend Request:</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="max-w-md mx-auto mt-4">
                <label htmlFor="search-username" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
 id="search-username"
                        value={searchUsername}
                        onChange={(e) => setSearchUsername(e.target.value)}
                        placeholder="Search for a user"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                        Search
                    </button>
                </div>
            </form>

            <h2 className="text-xl font-bold mt-4 text-center">Your Friends:</h2>
            <ul  className='items-center'> 
                {friends.map((friend) => (
                    <li key={friend._id} className="border p-2 mt-2">
                        <strong>Username:</strong> {friend.username} <br />
                        <strong>Email:</strong> {friend.email}
                    </li>
                ))}
            </ul>

            <h2 className="text-xl font-bold mt-4 text-center">Friend Requests:</h2>
            <ul>
                {friendRequests.map((request) => (
                    <li key={request._id} className="border p-2 mt-2">
                        <strong>Username:</strong> {request.username} <br />
                        <button onClick={() => acceptFriendRequest(request._id)} className="bg-green-500 text-white p-1 mt-2">Accept</button>
                        <button onClick={() => rejectFriendRequest(request._id)} className="bg-red-500 text-white p-1 mt-2 ml-2">Reject</button>
                    </li>
                ))}
            </ul>

            <div>
                {searchResults.map((user) => (
                    <div key={user._id} className="border p-2 mt-2">
                        <strong>Username:</strong> {user.username} <br />
                        <button onClick={() => sendFriendRequest(user._id)} className="bg-blue-500 text-white p-1 mt-2">Send Friend Request</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendList;