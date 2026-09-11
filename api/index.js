import express from 'express';
import { createClient } from '@supabase/supabase-js';

const app = express();
app.use(express.json());

let supabase = null;

// Lazy initialization so env variables have time to load
const getSupabase = () => {
  if (supabase) return supabase; // return cached instance
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  if (supabaseUrl && supabaseKey) {
    supabase = createClient(supabaseUrl, supabaseKey);
  }
  return supabase;
};

// GET /api/wishes - Fetch all wishes ordered by newest first
app.get('/api/wishes', async (req, res) => {
  const db = getSupabase();
  if (!db) return res.status(500).json({ error: 'Supabase client not initialized. Check ENV variables.' });

  try {
    const { data, error } = await db
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.json(data);
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /api/wishes - Add a new wish
app.post('/api/wishes', async (req, res) => {
  const db = getSupabase();
  if (!db) return res.status(500).json({ error: 'Supabase client not initialized. Check ENV variables.' });

  const { name, message, attendance } = req.body;

  // Validate inputs
  if (!name || !message || !attendance) {
    return res.status(400).json({ error: 'Name, message, and attendance are required fields.' });
  }

  try {
    const { data, error } = await db
      .from('guestbook')
      .insert([{ name, message, attendance }])
      .select();

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Wish added successfully', data });
  } catch {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Health check endpoint just in case
app.get('/api/health', (req, res) => {
  res.json({ status: 'success', message: 'Wedding API is running' });
});

// IMPORTANT: Export the app instead of using app.listen() for Vercel Serverless
export default app;
