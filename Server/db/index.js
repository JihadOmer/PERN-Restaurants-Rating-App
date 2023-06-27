const { Pool } = require("pg");

// const pool = new Pool();

// module.exports = { query: (text, params) => pool.query(text, params) };

// const { Pool } = require("pg");
// const db = new Pool({
//   connectionString: process.env.DBConfigLink,

// });

const db = new Pool({
  user: "user1",
  host: "dpg-cideb6tph6eounfa10gg-a.frankfurt-postgres.render.com",
  database: "pricing_jz6y",
  password: "zi4yMt6QYfzbX4CZmjdrDsWXevNRo1p0", // Make sure it is a string
  port: "5432",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = db;
