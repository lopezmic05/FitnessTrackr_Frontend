import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <nav>
          <Link to='home'>Home</Link> |{""}
          <Link to='routines'>Routines</Link>|{""}
          <Link to='my-routines'>My Routines</Link>|{""}
          <Link to='activities'>Activities</Link>|{""}
          <Link to='Login'>Login</Link>
        </nav>
      </nav>
      <h1>This is FitnessTrackr Home!!</h1>
      <Outlet />
    </div>
  );
};

export default App;
