import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/users/recommendations', {
                headers: { Authorization: token }
            });
            setRecommendations(response.data);
        };
        fetchRecommendations();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold">Friend Recommendations</h2>
            <ul>
                {recommendations.map(user => (
                    <li key={user._id} className="border-b py-2">{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendations;