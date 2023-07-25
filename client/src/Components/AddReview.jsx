import React, { useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function AddReview() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const HandleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      await RestaurantFinder.post(`/${id}/addReview`, {
        name,
        rating,
        review: reviewText,
      });

      // refresh the page
      navigate("/");
      navigate(location.pathname);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
              value={{ rating }}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            className="form-control"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={HandleSubmitReview}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddReview;
