import { useEffect, useState } from "react";
import { Route, Routes} from "react-router-dom";
import{NavBar, Profile, Activities, Register, Routines, Login, CreateRoutine, CreateActivity, UpdateRoutine }  from "./"

import './app.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [routines, setRoutines] = useState([]);
  const [activity, setActivity] = useState([]);
  

  useEffect(() => {
    if(localStorage.getItem("token")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <NavBar 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn}
      setUsername={setUsername}
      setPassword={setPassword}
      />
      <div>
      {isLoggedIn ? (
      <Routes>
            <Route path="/" 
            element={<h1>Welcome To FitnessTrackr!</h1>}>
            </Route>
            <Route path="/profile" element={<Profile username={username} />}></Route>
            <Route path="/routines" element={<Routines />}></Route>
            <Route path="/CreateRoutine" element={<CreateRoutine routines={routines} setRoutines={setRoutines} />}></Route>
            <Route path="/CreateActivity" element={<CreateActivity activity={activity} setActivity={setActivity} />}></Route>
            {/* <Route path="/UpdateRoutine" element={<UpdateRoutine name={routines.name} goal={routines.goal} routineId={routines.id}/>}></Route> */}
            <Route path="/activities" element={<Activities />}></Route>
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
      </Routes>

      ) : (
        <div>

        <Routes>
            <Route path="/" 
            element={<h1 className="main-head">Welcome To FitnessTrackr! Please log in to begin.
            </h1>}>
            </Route>
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/routines" element={<Routines />}></Route>
            <Route path="/activities" element={<Activities />}></Route>
        </Routes>
        </div>

      )}

      </div>
    </div>
  );
};

export default App;
