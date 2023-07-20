const { Pool } = require("pg");
require("dotenv").config();

const connectionString =
  "postgres://user1:zi4yMt6QYfzbX4CZmjdrDsWXevNRo1p0@dpg-cideb6tph6eounfa10gg-a.frankfurt-postgres.render.com/pricing_jz6y";
const db = new Pool({
  connectionString,
});

// db.connect((err) => {
//   if (err) throw err;
//   console.log("🎉 Database connected successfully 🎉");
// });

module.exports = db;
