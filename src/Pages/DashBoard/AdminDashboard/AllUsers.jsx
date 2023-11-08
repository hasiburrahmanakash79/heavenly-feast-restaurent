import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import UseTitle from "../../../Hook/UseTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const AllUsers = () => {
  UseTitle("AllUsers");
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery({
    queryKey:["users"], 
    enabled: !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    }
  });

  const handleAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        refetch()
        if(data.modifiedCount){
            Swal.fire({
                showConfirmButton: false,
                timer: 1500,
                title: `${user.name} is admin now`,
                icon: "success",
              });
        }
    })
  }

  return (
    <div className="p-5">
      <SectionTitle
        subTitle={"Happy user"}
        title={"manage user"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? 'admin':(
                    <button onClick={() => handleAdmin(user)} className="text-white text-xl bg-yellow-600 p-3 rounded">
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button className="text-white text-xl bg-red-700 p-3 rounded">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
