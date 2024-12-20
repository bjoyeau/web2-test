import { Link } from "react-router-dom";
import "./Navbar.css";
import { MaybeAuthenticatedUser } from "../../types";

interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser: () => void;
}

const NavBar = ({ authenticatedUser, clearUser }: NavBarProps) => {
  if(authenticatedUser) {
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cinemas">Cinemas</Link>
        <Link to="/movie-list">My favorite movies</Link>
        <Link to="/add-movie">Add a movie</Link>
        <button onClick={clearUser}>Logout</button>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/register">Create a user</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default NavBar;
