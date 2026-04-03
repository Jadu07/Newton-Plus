import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false // Explicitly disable SSL as confirmed by previous tests
});

// Use a simple middleare to ensure search_path is set for every request if needed,
// but for now, we'll just use fully qualified names for reliability.
const SCHEMA = 'Newton_Brown_metantson';
const TABLE = `${SCHEMA}.download_metrics`;

// Initialize Database Table
const initDB = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL.');
    
    await client.query(`CREATE SCHEMA IF NOT EXISTS ${SCHEMA}`);
    await client.query(`
      CREATE TABLE IF NOT EXISTS ${TABLE} (
        id SERIAL PRIMARY KEY,
        metric_name VARCHAR(50) UNIQUE,
        count INTEGER DEFAULT 250
      )
    `);
    
    await client.query(`
      INSERT INTO ${TABLE} (metric_name, count)
      VALUES ('extension_downloads', 250)
      ON CONFLICT (metric_name) DO NOTHING
    `);
    
    console.log(`Database initialized in schema ${SCHEMA}.`);
    client.release();
  } catch (err) {
    console.error('Initialization error:', err.message);
  }
};

initDB();

// Routes
app.get('/api/downloads', async (req, res) => {
  try {
    const result = await pool.query(`SELECT count FROM ${TABLE} WHERE metric_name = $1`, ['extension_downloads']);
    const count = result.rows[0]?.count || 250;
    res.json({ count });
  } catch (err) {
    console.error('GET Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/downloads', async (req, res) => {
  try {
    const result = await pool.query(
      `UPDATE ${TABLE} SET count = count + 1 WHERE metric_name = $1 RETURNING count`,
      ['extension_downloads']
    );
    const count = result.rows[0]?.count;
    res.json({ count });
  } catch (err) {
    console.error('POST Error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

pool.on('error', (err) => {
  console.error('Unexpected pool error:', err.message);
});
