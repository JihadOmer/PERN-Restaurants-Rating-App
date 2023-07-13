import React from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'


function RestaurantDetailPage() {

  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  const { id } = useParams()

  return (
    <div>RestaurantDetailPage</div>
  )
}

export default RestaurantDetailPage