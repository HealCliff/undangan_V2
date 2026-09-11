import app from './api/index.js';
import dotenv from 'dotenv';

// Load variables from .env into process.env
dotenv.config();

const port = 3001;

app.listen(port, () => {
  console.log(`✅ Local Backend API is running on http://localhost:${port}`);
  console.log(`⚡ Make sure your Vite server is running in another terminal.`);
});
