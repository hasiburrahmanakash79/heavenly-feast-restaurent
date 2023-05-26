import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const NavItems = (
    <>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/contact'>Contact us</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/menu'>Our menu</Link>
      </li>
      <li>
        <Link to='/shop'>Our shop</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-2xl mx-auto bg-opacity-40 bg-black font-semibold text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars/>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                {NavItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Heavenly feast</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavItems}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
