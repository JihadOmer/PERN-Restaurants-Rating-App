import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetailPage />}
          />
          <Route
            exact
            path="/restaurants/:id/update"
            element={<UpdatePage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
