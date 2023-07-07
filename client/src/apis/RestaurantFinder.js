import axios from "axios";

const baseURL = "https://restaurants-rating-app.onrender.com";

export default axios.create({
  baseURL,
});
//
