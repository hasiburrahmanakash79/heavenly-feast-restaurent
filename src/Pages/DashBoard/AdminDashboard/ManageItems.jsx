import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hook/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     axiosSecure.delete(`/menu/${id}`).then((res) => {
      //       if (res.data.deletedCount == 0) {
      //         refetch();
      //         Swal.fire("Deleted!", "Your file has been deleted.", "success");
      //       }
      //     });
      //   }
      // });
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/menu/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="p-5">
      <SectionTitle
        title={"Manage all items"}
        subTitle={"Hurry Up!"}
      ></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Item image</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Update Item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={item.image}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td> ${item.price}</td>
                <td>
                  <button className="text-white text-xl bg-yellow-600 p-3 rounded">
                    <FaEdit></FaEdit>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-white text-xl bg-red-700 p-3 rounded"
                  >
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

export default ManageItems;
