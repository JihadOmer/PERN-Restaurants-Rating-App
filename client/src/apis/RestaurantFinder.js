import axios from "axios";

const baseURL = "api/v1/restaurants";

export default axios.create({
  baseURL,
});
