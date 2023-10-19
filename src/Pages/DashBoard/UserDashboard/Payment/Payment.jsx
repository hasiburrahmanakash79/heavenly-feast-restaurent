import { useParams } from "react-router-dom";
import UseTitle from "../../../../Hook/UseTitle";
import useCart from "../../../../Hook/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Payment = () => {
  UseTitle("Payment");
  const { user } = useContext(AuthContext);
  const [cart] = useCart();
  const { id } = useParams();
  const items = cart.find((menu) => menu._id == id);
  console.log(items);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="p-5">
      <SectionTitle subTitle={"Pay now"} title={"Payment"}></SectionTitle>
      <div className="md:grid grid-cols-2 bg-base-200 p-5 rounded">
        <div className="flex justify-center items-center gap-5">
          <div className="avatar">
            <div className="w-full rounded">
              <img src={items?.image} />
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-3xl">{items?.name}</h1>
            <h1 className="text-xl">Price: ${items?.price}</h1>
            <h1>Description: {items?.recipe}</h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-10 rounded-lg mx-auto"
        >
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label className="label">
                <span className="label-text">Name </span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Type here"
                value={user.displayName}
                className="input w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Type here"
                value={user.email}
                className="input w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                {...register("phone", { required: true })}
                type="number"
                placeholder="Type here"
                className="input w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location", { required: true })}
                placeholder="Delivery location"
                className="input w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <select
                {...register("quantity", { required: true })}
                type="select"
                placeholder="Quantity"
                className="input w-full"
              >
                <option disabled selected>
                Select Quantity
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Select Currency</span>
              </label>
              <select
                {...register("currency", { required: true })}
                type="select"
                placeholder="Currency"
                className="input w-full"
              >
                <option disabled selected>
                  Select Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>URO</option>
                <option>RUP</option>
              </select>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Payment"
              className="btn bg-[#D1A054] border-none w-full mt-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
