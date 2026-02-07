import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
