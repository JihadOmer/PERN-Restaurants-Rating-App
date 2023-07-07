import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "api/v1/restaurants"
    : "https://restaurants-rating-app.onrender.com/";

export default axios.create({
  baseURL,
});
//
