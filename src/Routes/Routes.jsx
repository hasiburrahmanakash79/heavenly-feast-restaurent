import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute"
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import AddToCart from "../Pages/AddToCart/AddToCart";
import DashBoard from "../Layouts/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";
import AdminRoute from "./AdminRoute";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Contact from "../Pages/Contact/Contact";
import AllUsers from "../Pages/DashBoard/AdminDashboard/AllUsers";
import AddItems from "../Pages/DashBoard/AdminDashboard/AddItems";
import ManageItems from "../Pages/DashBoard/AdminDashboard/ManageItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: '/shop',
          element: <OurShop></OurShop>
        },
        {
          path: '/addToCart',
          element: <AddToCart></AddToCart>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },

      ///Admin Dashboard
      {
        path: 'allUser',
        element: <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItems/></AdminRoute>
      },
      {
        path: 'manageItem',
        element: <ManageItems/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  }
  
]);


export default router;