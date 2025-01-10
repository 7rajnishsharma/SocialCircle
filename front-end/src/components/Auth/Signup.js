import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/signup', { username, password });
            // Redirect to login or show success message
        } catch (error) {
            console.error('Signup failed:', error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p ```javascript
-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">Signup</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 w-full mb-4" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 w-full mb-4" />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Signup</button>
        </form>
    );
};

export default Signup;