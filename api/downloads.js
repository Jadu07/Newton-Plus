import pg from 'pg';

const { Pool } = pg;

// Vercel handles pooling natively outside the function runtime
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

const SCHEMA = 'Newton_Brown_metantson';
const TABLE = `${SCHEMA}.download_metrics`;

export default async function handler(req, res) {
  // CORS configuration for Vercel
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const result = await pool.query(`SELECT count FROM ${TABLE} WHERE metric_name = $1`, ['extension_downloads']);
      const count = result.rows[0]?.count || 250;
      return res.status(200).json({ count });
    } catch (err) {
      console.error('API GET Error:', err.message);
      return res.status(500).json({ error: err.message });
    }
  } 
  
  if (req.method === 'POST') {
    try {
      const result = await pool.query(
        `UPDATE ${TABLE} SET count = count + 1 WHERE metric_name = $1 RETURNING count`,
        ['extension_downloads']
      );
      const count = result.rows[0]?.count;
      return res.status(200).json({ count });
    } catch (err) {
      console.error('API POST Error:', err.message);
      return res.status(500).json({ error: err.message });
    }
  }

  // Fallback for unsupported methods
  return res.status(405).json({ error: 'Method not allowed' });
}
