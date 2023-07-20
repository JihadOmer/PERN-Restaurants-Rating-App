const { Pool } = require("pg");
require("dotenv").config();

const { DATABASE_URL } = process.env;
const db = new Pool({
  connectionString: DATABASE_URL + "?sslmode=require",
});

// db.connect((err) => {
//   if (err) throw err;
//   console.log("🎉 Database connected successfully 🎉");
// });

module.exports = db;
