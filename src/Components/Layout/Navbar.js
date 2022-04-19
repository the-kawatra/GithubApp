import React, {useContext} from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../Context/ThemeContext";

const Navbar = (props) => {
   const theme = useContext(ThemeContext);

  return (
    <nav style={{background: theme.background, color: theme.foreground}} className="navbar">
      <Link to="/">
        <h1>
          <i className={props.logo}></i> {props.appName}
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
