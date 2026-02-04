# Render Services API

A clean Express API for managing Render services.

## Prerequisites

- Node.js (v18 or higher recommended)
- A Render API Key ([Get it here](https://dashboard.render.com/u/settings#api-keys))

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment**:
   Create a `.env` file in the root directory and add your API key:
   ```text
   RENDER_API_KEY=your_api_key_here
   ```

3. **Run the server**:
   ```bash
   npm run dev
   ```

## Usage

Once the server is running, you can access the list of services at:
- `GET /services` - Returns a JSON list of all your Render services.
