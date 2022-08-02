import { Route, Routes} from "react-router-dom";
import{NavBar, Register, Login }  from "./"

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
            <Route path="/" 
            element={<h1>This Is FitnessTrackr!</h1>}>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
};

export default App;
