require('dotenv').config();
const express = require('express');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

// Middleware
app.use(express.json());

// --- דף הבית המעוצב ---
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Render Inspector | API Status</title>
        <style>
            :root {
                --primary: #4630eb;
                --bg: #0b0e14;
                --card-bg: rgba(255, 255, 255, 0.05);
            }
            body { 
                font-family: 'Inter', -apple-system, system-ui, sans-serif; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                height: 100vh; 
                margin: 0; 
                background-color: var(--bg);
                background-image: 
                    radial-gradient(at 0% 0%, rgba(70, 48, 235, 0.15) 0px, transparent 50%),
                    radial-gradient(at 100% 100%, rgba(0, 209, 255, 0.1) 0px, transparent 50%);
                color: #ffffff;
                text-align: center;
                overflow: hidden;
            }
            .container {
                background: var(--card-bg);
                padding: 3.5rem 2.5rem;
                border-radius: 24px;
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                max-width: 420px;
                width: 90%;
            }
            .status-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(34, 197, 94, 0.1);
                color: #4ade80;
                padding: 8px 16px;
                border-radius: 100px;
                font-size: 0.8rem;
                font-weight: 600;
                margin-bottom: 1.5rem;
                border: 1px solid rgba(34, 197, 94, 0.2);
            }
            .status-dot {
                width: 8px;
                height: 8px;
                background: #22c55e;
                border-radius: 50%;
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
                70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
                100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
            }
            h1 { margin: 0 0 0.75rem 0; font-size: 2.2rem; font-weight: 700; letter-spacing: -0.03em; }
            p { font-size: 1.05rem; color: #94a3b8; line-height: 1.5; margin-bottom: 2.5rem; }
            .btn {
                display: block;
                padding: 16px 20px;
                background: var(--primary);
                color: white;
                text-decoration: none;
                border-radius: 14px;
                font-weight: 600;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 4px 15px rgba(70, 48, 235, 0.3);
            }
            .btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 25px rgba(70, 48, 235, 0.5);
                filter: brightness(1.1);
            }
            .footer {
                margin-top: 2rem;
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.3);
                letter-spacing: 0.05em;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="status-badge">
                <div class="status-dot"></div>
                SYSTEM OPERATIONAL
            </div>
            <h1>Inspector Console</h1>
            <p>Live API connection to Render cloud services and environment monitoring.</p>
            <a href="/services" class="btn">Launch Services Explorer</a>
            <div class="footer">v1.0.4 • SECURE API CONNECTION</div>
        </div>
    </body>
    </html>
  `);
});

// --- חיבור ה-Routes של ה-API ---
app.use('/services', serviceRoutes);

// --- טיפול בשגיאות 404 (נתיב לא נמצא) ---
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Resource not found',
    message: 'The requested endpoint does not exist.'
  });
});

module.exports = app;