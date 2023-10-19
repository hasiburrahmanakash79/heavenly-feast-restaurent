import { useParams } from "react-router-dom";
import UseTitle from "../../../../Hook/UseTitle";
import useCart from "../../../../Hook/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const Payment = () => {
  UseTitle("Payment");
  const [cart] = useCart();
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle subTitle={"Pay now"} title={"Payment"}></SectionTitle>
      <div className="p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-base-200 p-10 rounded-lg md:w-1/2 mx-auto"
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
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Type here"
                className="input w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
            <div>
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                placeholder="Type here"
                className="input w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                {...register("time", { required: true })}
                type="time"
                placeholder="Type here"
                className="input w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Guest</span>
              </label>
              <select
                {...register("person", { required: true })}
                type="select"
                placeholder="1 Person"
                className="input w-full"
              >
                <option disabled selected>
                  1 Person
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Add Item"
              className="btn bg-[#D1A054] border-none w-full mt-6"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
