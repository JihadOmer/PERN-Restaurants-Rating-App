import React, { useState, useEffect, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { useParams, useNavigate } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";

const UpdateRestaurant = (props) => {
  const [name, SetName] = useState("");
  const [location, SetLocation] = useState("");
  const [priceRange, SetPriceRange] = useState("");
  let navigate = useNavigate();
  const { id } = useParams();   
  const { restaurant } = useContext(RestaurantsContext);
  //  fetch data from api and retreave it on the field
  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response);
      SetName(response.data.data.restaurant.name);
      SetLocation(response.data.data.restaurant.location);
      SetPriceRange(response.data.data.restaurant.price_range);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
