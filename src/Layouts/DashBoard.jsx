import { FaBars, FaCalendarAlt, FaHome, FaMobileAlt, FaShoppingBag, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseTitle from "../Hook/UseTitle";

const DashBoard = () => {
  UseTitle('DashBoard')
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className=" my-6">
          <h1 className="text-4xl font-semibold">Heavenly Feast</h1>
          <p>Restaurant</p>
          </div>
          <li><NavLink to='/'><FaHome></FaHome> User Home</NavLink></li>
          <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
          <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
          <li><NavLink to='/'><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
          <li><NavLink to='/'><FaStar></FaStar> Add Review</NavLink></li>
          <div className="divider"></div> 
          <li><NavLink to='/'> <FaHome></FaHome> Shop Home</NavLink></li>
          <li><NavLink to='/'><FaBars></FaBars> Menu</NavLink></li>
          <li><NavLink to='/'><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
          <li><NavLink to='/'><FaMobileAlt></FaMobileAlt> Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
