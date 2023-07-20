const { Pool } = require("pg");
require("dotenv").config();

const connectionString = process.env.DATABASE_URL + "?sslmode=require";
const db = new Pool({
  connectionString,
});

db.connect((err) => {
  if (err) throw err;
  console.log("🎉 Database connected successfully 🎉");
});

module.exports = db;
