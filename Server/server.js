require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server listening on port ${port}!`));

app.get("/getRestaurants", (req, res) => {
  res.status(200).json({
    status: "success",
    restaurant: "Sareeg",
  });
});
