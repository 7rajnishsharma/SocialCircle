const express = require('express');
const { searchUsers, addFriend } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/search', authMiddleware, searchUsers);
router.post('/add-friend', authMiddleware, addFriend);

module.exports = router;