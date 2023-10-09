import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-5">
      <SectionTitle
        subTitle={"Only admin Access"}
        title={"Add an Item"}
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-10 rounded-lg md:w-1/2 mx-auto"
      >
        <div>
          <label className="label">
            <span className="label-text">Recipe name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Type here"
            className="input w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select w-full"
            >
              <option disabled>Pick One</option>
              <option>pizza</option>
              <option>soup</option>
              <option>salad</option>
              <option>drink</option>
              <option>dessert</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="text"
              placeholder="Type here"
              className="input w-full"
            />
          </div>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="rounded-lg w-full p-4"
            rows="5"
          ></textarea>
        </div>
        <div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input w-full max-w-xs my-3"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Add Item"
            className="btn bg-[#D1A054] border-none w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
