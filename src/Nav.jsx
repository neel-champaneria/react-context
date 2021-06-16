import { useContext } from "react";
import "./nav.css";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <div className="nav">
        <ul className="nav-ul">
          <li className="nav-item">-:Navbar:-</li>
          <li className="nav-item">Number Of Movies:{movies.length}</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
