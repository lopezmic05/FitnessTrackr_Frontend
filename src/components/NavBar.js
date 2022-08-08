import { Link, useNavigate } from "react-router-dom";
import "./navbar.css"

const NavBar = ({ isLoggedIn, setIsLoggedIn, setUsername, setPassword }) => {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/');
    setUsername("");
    setPassword("");
  }

  return (
    <div id="header">
      <h1><Link id="links" to="/">FitnessTrackr</Link></h1>
      {isLoggedIn ? (
        <>
          <nav id="links">
            <Link to="profile">Profile</Link> | {""}
            <Link to="routines">Routines</Link> | {""}
            <Link to="my-routines">My Routines</Link> | {""}
            <Link to="activities">Activities</Link> | {""}
            <Link to="Login" onClick={logout}>Logout</Link> 
          </nav>
        </>
      ) : (
        <>
        <nav id="links">
          <Link to="Login">Login</Link> | {""}
          <Link to="register">Register</Link>
        </nav>
        </>
      )}
    </div>
  );
}

export default NavBar;