const express = require("express");
require("dotenv").config();
const db = require("./db");

const app = express();

// middleware
app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
  const results = await db.query("select * from restaurant");
  console.log(results);
  res.status(200).json({
    // best practice =>  add number of rows in the response to keep track of the number of responses.
    results: results.rows.length,
    status: "success",
    data: {
      restaurant: results.rows,
    },
  });
  } catch (err) {
    console.log(err); 
  }
  });

    

// get individual restaurant
app.get("/api/v1/restaurant/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "Sareeg",
    },
  });
});
// create a restaurant
app.post("/api/v1/restaurant/:id", (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      restaurant: " NEW Sareeg",
    },
  });
});

// update restaurant
app.put("/api/v1/restaurant/:id", (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      resturant: "KFC",
    },
  });
});

// delete restaurant
app.delete("/api/v1/restaurant/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
