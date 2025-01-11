import React, { useState } from 'react';
import axios from 'axios';

const SearchUser  = () => {
    const [username, setUsername] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        try {
            const response = await axios.get(`http://localhost:8080/api/auth/search?username=${username}`);
            setResults(response.data); // Set the search results
        } catch (error) {
            setError(error.response?.data?.message || 'Search failed. Please try again.');
            console.error('Search failed:', error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center">Search Users</h1>
            <form onSubmit={handleSearch} className="max-w-md mx-auto mt-4">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                        Search
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
            {results.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold">Search Results:</h2>
                    <ul>
                        {results.map((user) => (
                            <li key={user._id} className="border p-2 mt-2">
                                <strong>Username:</strong> {user.username} <br />
                                <strong>Email:</strong> {user.email} {/* Display other user details as needed */}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {results.length === 0 && username && !error && (
                <p className="mt-4 text-center">No users found with that username.</p>
            )}
        </div>
    );
};

export default SearchUser ;