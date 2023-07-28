import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://test-restaurant-rating-app.onrender.com/api/v1/restaurants"
    : "http://localhost:3001/api/v1/restaurants";

export default axios.create({
  baseURL,
});
