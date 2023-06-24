import React from "react";
import Header from "../Components/Header";
import AddRestaurant from "../Components/AddRestaurant";
import RestaurantList from "../Components/RestaurantList";

function Home() {
  return (
    <>
      <Header />
      <AddRestaurant />
      <RestaurantList />
    </>
  );
}

export default Home;
