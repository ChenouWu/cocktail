import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4 mx-auto">
        <div className="flex-1 flex justify-center">
          <span className="font-semibold  text-2xl text-black">CockTail</span>
        </div>
        <div className="flex-none space-x-4">
          <NavLink to="/" className="text-sm text-black hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="text-sm text-black hover:underline">
            About
          </NavLink>
          <NavLink to="/newsletter" className="text-sm text-black hover:underline">
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
