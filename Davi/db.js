
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgresql://times_owner:qB6EhGJK7zMZ@ep-crimson-frog-a5dh1v2x.us-east-2.aws.neon.tech/times?sslmode=require",
  ssl: {
    rejectUnauthorized: false, 
  },
});

module.exports = pool;