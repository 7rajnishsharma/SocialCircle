const User = require('../models/User');

exports.searchUsers = async (req, res) => {
    const { query } = req.query;
    const users = await User.find({ username: { $regex: query, $options: 'i' } }).limit(10);
    res.json(users);
};

exports.addFriend = async (req, res) => {
    const { userId } = req.body;
    const user = await User.findById(req.user.id);
    if (!user.friends.includes(userId)) {
        user.friends.push(userId);
        await user.save();
    }
    res.json(user);
};