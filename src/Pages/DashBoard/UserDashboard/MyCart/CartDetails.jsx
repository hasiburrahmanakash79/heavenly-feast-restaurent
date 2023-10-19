import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../../Hook/useCart";
import { Link } from "react-router-dom";

const CartDetails = ({ item, index,}) => {
  const { _id, name, price, image } = item;
  const [, refetch] = useCart();

  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://heavenly-feast-server.vercel.app/carts/${item._id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            // if (data.deletedCount > 0) {
              
            // }
          });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td><Link to={`/dashboard/payment/${_id}`}><button  className="btn btn-sm btn-primary">Go to Pay</button></Link></td>
      <th>
        <button
          onClick={() => handleDelete(item)}
          className="text-white text-xl bg-red-700 p-3 rounded"
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default CartDetails;
