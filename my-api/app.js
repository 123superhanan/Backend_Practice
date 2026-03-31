const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set view engine
app.set('view engine', 'ejs');

// Routes
const courseRoutes = require('./routes/courseRoutes');
app.use('/', courseRoutes);

// Connect to Database & Start Server
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();
