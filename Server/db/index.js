const { Pool } = require("pg");


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;


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


