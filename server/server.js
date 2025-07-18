const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: "../.env" }); 
const cors = require('cors');
const connectDB = require('./src/config/db');
const bugRoutes = require('./src/routes/bugRoutes');
const errorHandler = require('./src/middleware/errorHandler');

// Load .env variables
dotenv.config();


// Connect to MongoDB (handled in src/config/db.js)
connectDB();

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/bugs', bugRoutes);

// Error Handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
