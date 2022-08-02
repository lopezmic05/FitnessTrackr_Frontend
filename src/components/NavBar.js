import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <div>
    <h1>Welcome To FitnessTrackr!!</h1>
    <nav>
    <Link to="/">Home</Link> |{""}
        <Link to="routines">Routines</Link> | {""}
        <Link to="my-routines">My Routines</Link> | {""}
        <Link to="activities">Activities</Link> | {""}
        <Link to="Login">Login</Link> | {""}
        <Link to="register">Register</Link>
      </nav>
    
    </div>
     );
}
 
export default NavBar;