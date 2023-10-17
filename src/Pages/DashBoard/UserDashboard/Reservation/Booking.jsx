import { useForm } from 'react-hook-form';

const Booking = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-10 rounded-lg md:w-1/2 mx-auto"
      >
        <div>
          <label className="label">
            <span className="label-text">Which recipe you liked most?</span>
          </label>
          <input
            type="text"
            {...register("recipe", { required: true })}
            placeholder="Type here"
            className="input w-full"
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">
              Do you have any suggestion for us?
            </span>
          </label>
          <input
            {...register("suggestion", { required: true })}
            type="text"
            placeholder="Type here"
            className="input w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">
              Kindly express your care in a short way.
            </span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="rounded-lg w-full p-4"
            placeholder=" Recipe Details"
            rows="5"
          ></textarea>
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
  );
};

export default Booking;