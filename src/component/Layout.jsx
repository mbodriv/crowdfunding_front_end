import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>By Maria Bodero</footer>
    </div>
  );
}

export default Layout;
