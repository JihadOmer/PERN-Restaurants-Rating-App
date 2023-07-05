const { Pool } = require("pg");


// external db render.com
const db = new Pool({
  connectionString: process.env.DATABASE_URL + "?sslmode=require",
});

db.connect((err) => {
  if (err) throw err;
  console.log("🎉 Database connected successfully 🎉");
});

// module.exports = pool;
module.exports = { query: (text, params) => db.query(text, params) };

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });

// pool.connect((err) => {
//   if (err) throw err;
//   console.log("Connect to PostgreSQL successfully!");
// });

// module.exports = pool;

//##########################
// const pool = new Pool();

// const db = new Pool({
//   connectionString: process.env.DBConnLink,
// });

// module.exports = { query: (text, params) => pool.query(text, params) };

//##########################
// remote db render.com (internal)
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

// module.exports = { query: (text, params) => db.query(text, params) };

