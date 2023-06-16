require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

// middlewares
app.use(express.json()); // to send body with request

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

// get one restaurant

app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const restaurantId = parseInt(req.params.id); // Convert to integer
    // Check if the ID is an integer
    // if (isNaN(restaurantId)) {
    //     throw new Error("Invalid restaurant ID"); // Throw an error for non-integer input
    //   }
    // use this format to avoid sql injection attacks => read more
    const results = await db.query("select * from restaurant where id = $1", [
      restaurantId,
    ]);

    res.status(200).json({
      status: "success",

      data: {
        restaurant: results.rows[0], // since we are returning only one restaurant
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// create a restaurant //  use params
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "INSERT INTO restaurant (name, location, price_range) values ($1, $2, $3) returning *",
      [req.params.name, req.body.name, req.body.location, req.body.price_range]
    );
    console.log(results);

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// update restauran
app.put("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "update restaurant set name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        resturant: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  const results = await db.query("DELETE FROM restaurant WHERE id = $1", [
    req.params.id,
  ]);
  console.log(results);
  try {
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
  }
});

// ~~~ port setting ~~~~
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
