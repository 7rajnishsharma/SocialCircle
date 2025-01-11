const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Use auth routes
app.use('/api/auth', authRoutes); // Ensure this line is present

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection failed:', err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});