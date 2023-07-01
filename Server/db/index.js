const { Pool } = require("pg");

const pool = new Pool();

module.exports = { query: (text, params) => pool.query(text, params) };

// import { Pool } from "pg";

// pools will use environment variables
// for connection information
// const db = new Pool();

// you can also use async/await

// await pool.end();

// clients will also use environment variables
// for connection information
// const client = new Client();
// await client.connect();

// await client.end();

// const db = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// module.exports = db;

// const db = new Pool({
//   connectionString: process.env.DBConnLink,
// });

// const db = new Pool({
//   user: "user1",
//   host: "dpg-cideb6tph6eounfa10gg-a",
//   database: "pricing_jz6y",
//   password: "zi4yMt6QYfzbX4CZmjdrDsWXevNRo1p0",
//   port: "5432",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// const db = new Pool({
//   connectionString: "your-database-url",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
