import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  const AddRestaurant = (restaurant) => { // this function is passed to AddRestaurant.jsx
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, AddRestaurant }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};


