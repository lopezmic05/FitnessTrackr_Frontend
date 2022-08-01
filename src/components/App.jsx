import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
    <NavBar />
      <h1>This is FitnessTrackr Home!!</h1>
      <Outlet />
    </div>
  );
};

export default App;
