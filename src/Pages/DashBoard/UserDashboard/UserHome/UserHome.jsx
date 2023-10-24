import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-10">Hi, Welcome Back! </h1>
      <div className="grid grid-cols-2">
        <div className="bg-violet-300 flex flex-col justify-center items-center py-28">
          <div className="avatar">
            <div className="w-40 rounded-full">
              {
                user?.photoURL ? <img src={user?.photoURL} /> : <img src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
              }
              
            </div>
          </div>
          <h1 className="text-3xl mt-7">{user?.displayName} </h1>
        </div>
        <div className="bg-yellow-200 p-28">
          <h1 className="text-4xl font-bold mb-5">Your Activities</h1>
          <p className="text-2xl">Orders: 6</p>
          <p className="text-2xl">Reviews: 2</p>
          <p className="text-2xl">Bookings: 1</p>
          <p className="text-2xl">Bookings: 1</p>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
