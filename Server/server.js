const express = require("express");
require("dotenv").config();

const app = express();

// middleware
app.use(express.json());

// get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["Sareeg", "KFC"],
    },
  });
});

// get individual restaurant
app.get("/api/v1/getReastaurant/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "Sareeg",
    },
  });
});
// create a restaurant
app.post("/api/v1/createRestaurant", (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "Sareeg",
    },
  });
});

// update restaurant
app.put("/api/v1/updateRestaurant/:id", (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      resturant: "Sareeg",
      location: "Khartoum",
      rating: "3"
    },
  });
});

// delete restaurant
app.delete("/api/v1/deleteRestaurant/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
