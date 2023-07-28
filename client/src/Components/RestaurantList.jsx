import React, { useContext, useEffect } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import "../styles/RestaurantList.css";
const RestaurantList = (props) => {
  // destucture the restaurants and setRestaurants obj we passed in context component
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  let navigate = useNavigate(); // to navigate to another page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");

        setRestaurants(response.data.data.restaurant);
      } catch (err) {}
    };

    fetchData();
  }, [setRestaurants]);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    setRestaurants(
      restaurants.filter((restaurant) => {
        return restaurant.id !== id;
      })
    );

    try {
      await RestaurantFinder.delete(`/${id}`);

      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {}
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  };

  const handleRestaurantDetails = (id) => {
    navigate(`/restaurants/${id}`);
  };

  const RenderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.id} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    );
  };
  return (
    <div className="group-list">
      <table className="table table-hover">
        <thead>
          <tr bg-primery="true">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <tr
                  className="restaurant-row"
                  key={restaurant.id}
                  onClick={() => handleRestaurantDetails(restaurant.id)}
                >
                  <td className="restaurant-name">{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>
                    <span>{"$".repeat(restaurant.price_range)}</span>
                  </td>
                  <td>{RenderRating(restaurant)}</td>
                  <td>
                    <button
                      onClick={(e) => handleUpdate(e, restaurant.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
