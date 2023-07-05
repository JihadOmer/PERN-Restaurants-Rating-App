import axios from "axios";

const baseURL = "api/v1/restaurants";
// process.env.NODE_ENV === "production"
// ? "api/v1/restaurants"
// : "http://localhost:3001/api/v1/restaurants";

export default axios.create({
  baseURL,
});
