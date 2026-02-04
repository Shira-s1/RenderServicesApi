require('dotenv').config();
const express = require('express');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Render Services Explorer is Up and Running!</h1><p>To see your services, go to <a href="/services">/services</a></p>');
});

app.use('/services', serviceRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Resource not found'
  });
});

module.exports = app;
