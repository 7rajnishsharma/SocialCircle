import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);
    const [error, setError] = useState(null); // State to hold error messages

    useEffect(() => {
        const fetchRecommendations = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await axios.get('http://localhost:8080/api/users/recommendations', {
                    headers: { Authorization: `Bearer ${token}` } // Ensure the token is prefixed with 'Bearer '
                });
                setRecommendations(response.data);
            } catch (err) {
                setError('Failed to fetch recommendations'); // Set error message
                console.error('Error fetching recommendations:', err);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Friend Recommendations</h2>
            {error && <p className="text-red-500">{error}</p>} {/* Display error message if exists */}
            <ul>
                {recommendations.map(user => (
                    <li key={user._id} className="border-b py-2">{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;