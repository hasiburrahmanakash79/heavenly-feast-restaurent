import { Link } from "react-router-dom";
import CartDetails from "./CartDetails";
import UseTitle from "../../../../Hook/UseTitle";
import useCart from "../../../../Hook/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const MyCart = () => {
  UseTitle("MyCart");
  const [cart, ] = useCart();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div className="p-10">
      <div>
        <SectionTitle
          subTitle={"Hurry Up"}
          title={"MANAGE ALL ITEMS"}
        ></SectionTitle>
      </div>
      <div className="border p-5 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Total items: {cart.length}</h1>
          <h1 className="text-2xl font-bold">
            Total Price: {totalPrice.toFixed(2)}
          </h1>
          <Link to='/dashboard/payment'><button  className="btn btn-primary">PAY</button></Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Food Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartDetails
                  key={item._id}
                  item={item}
                  index={index}
                ></CartDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
