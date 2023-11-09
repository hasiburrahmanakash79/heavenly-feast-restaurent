import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hook/useCart";

const FoodDetailsCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {
        image,
        name,
        price,
        recipe,
        email: user.email,
        id: _id,
      };
      fetch("https://heavenly-feast-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Item has been added.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "If you want to add food you net to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      <div className="shadow-lg card">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-56 rounded-lg object-cover object-center"
          />
        </div>
        <div className="card-body items-center">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p className="text-sm">{recipe}</p>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline bg-slate-100 border-0 border-b-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetailsCard;
