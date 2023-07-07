// const { Pool } = require("pg");



// const db = new Pool({
//   connectionString: process.env.DATABASE_URL + "?sslmode=require",
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log("🎉 Database connected successfully 🎉");
// });

// // module.exports = pool;
// module.exports = { query: (text, params) => db.query(text, params) };


const { Pool } = require("pg");

const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};