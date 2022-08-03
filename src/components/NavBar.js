import { Link } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {
    return ( 
    <div id="header">
    <h1>FitnessTrackr</h1>
    <nav id="links">
    <Link to="/">Home</Link> | {""}
        <Link to="Login">Login</Link> | {""}
        <Link to="profile">Profile</Link> | {""}
        <Link to="register">Register</Link>
      </nav>
    
    </div>
     );
}
 
export default NavBar;