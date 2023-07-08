const { Pool } = require("pg");



const db = new Pool({
  connectionString: process.env.DATABASE_URL + "?sslmode=require",
});

db.connect((err) => {
  if (err) throw err;
  console.log("🎉 Database connected successfully 🎉");
});


module.exports = db;