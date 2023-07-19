import axios from "axios";

const baseURL = "https://test-restaurant-rating-app.onrender.com";

export default axios.create({
  baseURL,
});
