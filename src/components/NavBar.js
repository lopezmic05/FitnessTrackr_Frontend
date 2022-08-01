import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <div>
    <h1>This is the NavBar</h1>
    <nav>
    <Link to="home">Home</Link>
        <Link to="routines">Routines</Link>
        <Link to="my-routines">My Routines</Link>
        <Link to="activities">Activities</Link>
        <Link to="Login">Login</Link>
      </nav>
    
    </div>
     );
}
 
export default NavBar;