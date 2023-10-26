import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useMenu from "../../../Hook/useMenu";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [menu] = useMenu()
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-10">
        Hi, Welcome Back! {user?.displayName}{" "}
      </h1>
      <div className="grid grid-cols-2">
        <div className="bg-violet-300 flex flex-col justify-center items-center py-28">
          <div className="avatar">
            <div className="w-40 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} />
              ) : (
                <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
              )}
            </div>
          </div>
          <h1 className="text-3xl mt-7">{user?.displayName} </h1>
        </div>
        <div className="bg-yellow-200 p-28">
          <h1 className="text-4xl font-bold mb-5">Heavenly Feast</h1>
          <p className="text-2xl">Total Menu: {menu.length}</p>
          <p className="text-2xl">Total User: {user.length}</p>
          <p className="text-2xl">Bookings: 1</p>
          <p className="text-2xl">Bookings: 1</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
