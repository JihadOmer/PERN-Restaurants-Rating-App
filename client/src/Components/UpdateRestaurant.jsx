import React, { useState, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useParams, useNavigate } from "react-router-dom";


const UpdateRestaurant = (props) => {
  const [name, SetName] = useState("");
  const [location, SetLocation] = useState("");
  const [priceRange, SetPriceRange] = useState("");
  let navigate = useNavigate();
  // eslint-disable-next-line
  const { id } = useParams();
  // eslint-disable-next-line
  

  //  to load fields when page is loaded
  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);

      SetName(response.data.data.restaurant.name);
      SetLocation(response.data.data.restaurant.location);
      SetPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,  
    });
    navigate("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            id="location"
            className="form-control"
            type="text"
            value={location}
            onChange={(e) => SetLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            id="price_range"
            className="form-control"
            type="number"
            value={priceRange}
            onChange={(e) => SetPriceRange(e.target.value)}
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
