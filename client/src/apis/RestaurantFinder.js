import axios from "axios";

const baseURL =
  "https://test-restaurant-rating-app.onrender.com/api/v1/restaurants";

export default axios.create({
  baseURL,
});
