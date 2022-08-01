import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Activities, App, MyRoutines, NavBar, Routines } from "./components";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='activities' element={<Activities />} />
      <Route path='my-routines' element={<MyRoutines />} />
      <Route path='routines' element={<Routines />} />
    </Routes>
  </BrowserRouter>
);
