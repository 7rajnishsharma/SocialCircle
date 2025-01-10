import React, { useState } from 'react';
import axios from 'axios';

const SearchUser  = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/users/search?query=${query}`, {
            headers: { Authorization: token }
        });
        setResults(response.data);
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Search Users</h2>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="border p-2 w-full mb-4" placeholder="Search for users..." />
            <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Search</button>
            <ul>
                {results.map(user => (
                    <li key={user._id} className="border-b py-2">{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchUser ;