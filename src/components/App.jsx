import { Route, Routes} from "react-router-dom";
import{NavBar, Profile, Register, Login }  from "./"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
            <Route path="/" 
            element={<h1>Welcome To FitnessTrackr!</h1>}>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default App;
