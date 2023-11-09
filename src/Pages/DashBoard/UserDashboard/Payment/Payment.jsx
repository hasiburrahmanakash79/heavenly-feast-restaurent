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
  const { register, handleSubmit, formState: { errors },} = useForm();

  const onSubmit = (data) => {
    data.itemsID = id
    fetch('https://heavenly-feast-server.vercel.app/order', {
      method: 'POST',
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      window.location.replace(data.url)
      console.log(data);
    })
  };
  return (
    <div className="p-5">
      <SectionTitle subTitle={"Pay now"} title={"Payment"}></SectionTitle>
      <div className="md:grid grid-cols-2 bg-base-200 p-5 rounded">
        <div className="md:flex justify-center items-center gap-5">
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
          <div className="md:grid grid-cols-3 gap-10">
            <div>
              <label className="label">
                <span className="label-text">Name </span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Type here"
                defaultValue={user.displayName}
                className="input w-full"
              />
              {errors.name && <span className="text-red-600">This field is required</span>}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Type here"
                defaultValue={user.email}
                className="input w-full"
              />
              {errors.email && <span className="text-red-600">This field is required</span>}
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
              {errors.phone && <span className="text-red-600">This field is required</span>}
            </div>
          </div>
          <div className="md:grid grid-cols-3 gap-10">
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
              {errors.location && <span className="text-red-600">This field is required</span>}
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
                <option disabled>
                Select Quantity
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              {errors.quantity && <span className="text-red-600">This field is required</span>}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Currency</span>
              </label>
              <select
                {...register("currency", { required: true })}
                type="select"
                placeholder="Currency"
                className="input w-full"
              >
                <option disabled>
                  Select Currency
                </option>
                <option>BDT</option>
                <option>USD</option>
                <option>URO</option>
                <option>RUP</option>
              </select>
              {errors.currency && <span className="text-red-600">This field is required</span>}
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
