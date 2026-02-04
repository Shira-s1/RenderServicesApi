const app = require('./app');

const PORT = process.env.PORT || 3000;

// Start server
const server = app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Server is running on port ${PORT}`);
  
  if (!process.env.RENDER_API_KEY) {
    console.warn('WARNING: RENDER_API_KEY is not defined in environment variables.');
  }
});

// Basic error handling for server startup
server.on('error', (error) => {
  console.error('Server failed to start:', error.message);
  process.exit(1);
});