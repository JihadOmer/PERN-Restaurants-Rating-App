require("dotenv").config(); // to use .env file

const express = require("express");
const db = require("./db"); // to use db connection
const cors = require("cors");

const app = express();

// middlewares
app.use(cors()); // to allow cross origin requests
app.use(express.json()); // to send body with request

// get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("select * from restaurant");

    res.status(200).json({
      // best practice =>  add number of rows in the response to keep track of the number of responses.
      results: results.rows.length,
      status: "success",
      data: {
        restaurant: results.rows,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching restaurants.",
    });
  }
});

// get one restaurant

app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const restaurantId = parseInt(req.params.id); // Convert to integer

    const restaurant = await db.query(
      "select * from restaurant where id = $1",
      [restaurantId]
    );

    const review = await db.query(
      "select * from reviews where restaurant_id = $1",
      [restaurantId]
    );

    res.status(200).json({
      status: "success",

      data: {
        restaurant: restaurant.rows[0], // since we are returning only first restaurant on the array
        reviews: review.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// create a restaurant //  use params
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO restaurant (name, location, price_range) values ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0], // since we are returning only one restaurant
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// update restauran
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const results = await db.query(
      "update restaurant set name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );

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

// delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  const results = await db.query("DELETE FROM restaurant WHERE id = $1", [
    req.params.id,
  ]);

  try {
    res.status(200).json({
      status: "success",
      message: "Restaurant deleted successfully.",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the restaurant.",
    });
  }
});

// add review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3,$4) returning *",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );

    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// ~~~ port setting ~~~~
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
