require('dotenv').config();
const express = require('express');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/services', serviceRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Resource not found'
  });
});

module.exports = app;
