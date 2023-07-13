import React, { useState, createContext } from "react";


//create a context object
export const RestaurantsContext = createContext(); 


// this function is to  provide the data to the components
export const RestaurantsContextProvider = (props) => {

  // use state to store the list of restaurants we fetched from the server
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  // this function is pass data to AddRestaurant component
  const AddRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };


  return (
    // wrap all the components that need the context data with the provider
    <RestaurantsContext.Provider
      value={{ restaurants, setRestaurants, AddRestaurant, selectedRestaurant, setSelectedRestaurant }}
    >
      {props.children}
    </RestaurantsContext.Provider>
  );
};


