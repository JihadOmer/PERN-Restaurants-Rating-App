import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";
import Reviews from "../Components/Reviews";
import AddReview from "../Components/AddReview";

function RestaurantDetailPage() {
  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resposnse = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(resposnse.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // onlyl render the selected restaurant after the data is fetched (selectedRestaurant)
  return (
    <div>
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <h1 className="text-center display-1">
              {selectedRestaurant.restaurant.name}
            </h1>
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <div className="mt-3">
            <AddReview />
          </div>
        </>
      )}
    </div>
  );
}

export default RestaurantDetailPage;
