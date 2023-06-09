require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;


 // get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  res.status(200).json({
      status: "success",
    data :{
    restaurant: ["Sareeg",'KFC']
    }
  });
});

// get individual restaurant
app.get('/api/v1/getReastaurant/:id',(req, res) => {
     console.log(req.params)
})

// create a restaurant
app.post('/api/v1/createRestaurant',(req, res) => {
    console.log(req.body)
})








app.listen(port, () => console.log(`Server listening on port ${port}!`));
