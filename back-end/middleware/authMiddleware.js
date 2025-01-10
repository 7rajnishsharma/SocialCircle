const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authMiddleware = async (req, res, next) => {
    // Extract token from the Authorization header
    const token = req.headers['authorization'] && req.headers['authorization'].startsWith('Bearer ') 
        ? req.headers['authorization'].split(' ')[1] 
        : null;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.API_SECRET); // Ensure this matches your .env variable
        // Fetch the user from the database
        req.user = await User.findById(decoded.id);
        if (!req.user) {
            return res.status(404).json({ message: 'User  not found' });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};