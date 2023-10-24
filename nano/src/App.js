import { Fragment } from "react";
import Navbar from "./Components/Navigation.js";
import MainContent from "./Components/MainContent.js";
// import classes from "./Components/EventsNavigation.module.css";
import Slideshow from "./Components/Slideshow.js";
import { Route, Routes } from "react-router-dom";
import PeoplePage from "./Components/people/PeoplePage.js";
// import Research from "./research/Research";
import Res from "./research/Res.js";
// import "./research/index.css";
import Meal from "./react-meal/Meal.js";
const App = () => {
  return (
    <Fragment>
      <div>
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <Slideshow />
                  <MainContent />
                </Fragment>
              }
            ></Route>
            <Route path="/people" exact element={<PeoplePage />}>
              {/* <PeoplePage /> */}
            </Route>
            {/* <Route path="/products/:productId">
              <ProductDetail />
            </Route> */}
            <Route path="/research" element={<Res />}></Route>
            <Route path="/meal" element={<Meal />}></Route>
          </Routes>
        </main>
      </div>
    </Fragment>
  );
};
export default App;
