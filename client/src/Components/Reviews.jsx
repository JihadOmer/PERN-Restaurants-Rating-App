import React from "react";
import StarRating from "./StarRating";

function Reviews() {
  return (
    <div className="row row-cols-3 mb-2">
      <div className="card text-white bg-info mb-3">
        <div className="card-header d-flex justify-content-between">
          <span>Jihad </span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>

        <div className="card-body">
          <p className="card-text"> good restaurant</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;