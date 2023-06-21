import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <RestaurantsContextProvider>
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
        <Footer />
    </RestaurantsContextProvider>
  );
};

export default App;
