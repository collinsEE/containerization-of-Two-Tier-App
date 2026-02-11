const { Client } = require('pg');
const express = require('express');
const app = express();

// Connection details from environment variables
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function startApp() {
  try {
    await client.connect();
    console.log("Connected to PostgreSQL successfully!");

    app.get('/', async (req, res) => {
      const dbRes = await client.query('SELECT NOW()');
      res.send(`Two-Tier App Running! DB Time: ${dbRes.rows[0].now}`);
    });

    app.listen(8080, () => console.log('Server running on port 8080'));
  } catch (err) {
    console.error('Connection error', err.stack);
    process.exit(1);
  }
}

startApp();