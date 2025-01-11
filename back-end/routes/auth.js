const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path as necessary
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating tokens

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a token
        const token = jwt.sign({ id: user._id }, process.env.API_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, message: 'Login successful' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser  = await User.findOne({ email });
        if (existingUser ) {
            return res.status(400).json({ message: 'User  already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser  = new User({ username, email, password: hashedPassword });
        await newUser .save();

        const token = jwt.sign({ id: newUser ._id }, process.env.API_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token, message: 'User  created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Search user
router.get('/search', async (req, res) => {
    const { username } = req.query; // Get the username from query parameters

    try {
        const users = await User.find({ username: { $regex: username, $options: 'i' } }).select('-password'); // Exclude password
        res.status(200).json(users);
    } catch (error) {
        console.error('Error searching for users:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Send Friend Request
router.post('/send-friend-request', async (req, res) => {
    const { senderId, receiverId } = req.body;

    try {
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if (!receiver) {
            return res.status(404).json({ message: 'User  not found' });
        }

        // Check if the request already exists
        if (receiver.friendRequests.includes(senderId)) {
            return res.status(400).json({ message: 'Friend request already sent' });
        }

        receiver.friendRequests.push(senderId);
        await receiver.save();

        res.status(200).json({ message: 'Friend request sent' });
    } catch (error) {
        console.error('Error sending friend request:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Friends List
router.get('/friends/:userId', async (req, res) => {
    const { userId } = req.params;

    // Validate userId
    if (!userId || userId === 'null') {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
        const user = await User.findById(userId).populate('friends', 'username email'); // Populate friends with username and email
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }
        res.status(200).json(user.friends);
    } catch (error) {
        console.error('Error fetching friends:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get Friend Requests
router.get('/friend-requests/:userId', async (req, res) => {
    const { userId } = req.params;

    // Validate userId
    if (!userId || userId === 'null') {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }
        res.status(200).json(user.friendRequests);
    } catch (error) {
        console.error('Error fetching friend requests:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Accept Friend Request
router.post('/accept-friend-request', async (req, res) => {
    const { userId, friendId } = req.body;

    // Validate userId and friendId
    if (!userId || userId === 'null' || !friendId || friendId === 'null') {
        return res.status(400).json({ message: 'Invalid user ID or friend ID' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        // Check if the friend request exists
        if (!user.friendRequests.includes(friendId)) {
            return res.status(400).json({ message: 'Friend request not found' });
        }

        user.friends.push(friendId);
        user.friendRequests = user.friendRequests.filter(id => id !== friendId);
        await user.save();

        res.status(200).json({ message: 'Friend request accepted' });
    } catch (error) {
        console.error('Error accepting friend request:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Reject Friend Request
router.post('/reject-friend-request', async (req, res) => {
    const { userId, friendId } = req.body;

    // Validate userId and friendId
    if (!userId || userId === 'null' || !friendId || friendId === 'null') {
        return res.status(400).json({ message: 'Invalid user ID or friend ID' });
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        // Check if the friend request exists
        if (!user.friendRequests.includes(friendId)) {
            return res.status(400).json({ message: 'Friend request not found' });
        }

        user.friendRequests = user.friendRequests.filter(id => id !== friendId);
        await user.save();

        res.status(200).json({ message: 'Friend request rejected' });
    } catch (error) {
        console.error('Error rejecting friend request:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Example of a recommendations route in your backend
router.get('/recommendations', async (req, res) => {
    const userId = req.user.id; // Assuming you have middleware to set req.user from the token

    try {
        // Logic to fetch recommendations based on your criteria
        const recommendations = await User.find({ /* your criteria here */ }).limit(10); // Example criteria
        res.status(200).json(recommendations);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
