import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from '../components/StarRating';


function RestaurantDetailPage() {
  const { id } = useParams()

  const { selectedRestaurant, setSelectedRestaurant } =
    useContext(RestaurantsContext);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const resposnse =  await RestaurantFinder.get(`/${id}`)
          setSelectedRestaurant(resposnse.data.data.restaurant); 
        } catch (err) {
          console.log(err)
        }
      }
          fetchData();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])



  return <div>{selectedRestaurant && <StarRating rating={3}/>}</div>;
}


export default RestaurantDetailPage


