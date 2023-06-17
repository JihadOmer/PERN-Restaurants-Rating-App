import React from "react";

function RestaurantList() {
  return (
    <div className="group-list">
      <table class="table table-hover table-dark">
        <thead>
          <tr bg-primery>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sareeg</td>
            <td>Khartoum</td>
            <td>$$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Upate</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>KFC</td>
            <td>Huddersfield</td>
            <td>$$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Upate</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>PizzaHut</td>
            <td>London</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Upate</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantList;
