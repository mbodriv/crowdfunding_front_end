import { Link, NavLink, Outlet } from "react-router-dom";
import "./NavBar.css";
import { faHouse, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-inner">
          <div className="nav-left">
            <NavLink className="nav-home" to="/">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </NavLink>
            <NavLink className="nav-home" to="/fundraisers">Fundraisers</NavLink>
          </div>

          <Link className="nav-brand" to="/">
            <span className="brand-text">MENTOR</span>
            <span className="brand-mark"></span>
            <span className="brand-text">ME</span>
          </Link>

          <div className="nav-actions">
            <Link className="nav-login" to="/login">
              <FontAwesomeIcon icon={faCircleUser} />
              Login
            </Link>
            <Link className="nav-signup" to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default NavBar;
