import Swal from "sweetalert2";
import UseTitle from "../../../Hook/UseTitle";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  UseTitle("Add Item");

  const [axiosSecure]= useAxiosSecure()
  const Image_Hosting_Token = import.meta.env.VITE_image_hosting_apiKey

  console.log(Image_Hosting_Token);
  const { register, handleSubmit} = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(image_hosting_url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(imageResponse => {
      if(imageResponse.success){
        const imgURL = imageResponse.data.display_url;
        const {name, price,category, recipe} = data;
        const newItem = {name, price: parseInt(price),category, recipe, image: imgURL}
        console.log(newItem);
        axiosSecure.post('/menu', newItem)
        .then(data => {
          console.log("after post:" , data.data);
          if(data.data.insertedId){
            Swal.fire({
              showConfirmButton: false,
              timer: 2000,
              title: "Item added Successful",
              icon: "success",
            });
          }
        })
      }
    })
  };


  return (
    <div className="p-5">
      <SectionTitle
        subTitle={"Only admin Access"}
        title={"Add an Item"}
      ></SectionTitle>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200 p-10 rounded-lg w-full"
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
              <option disabled>
                Pick One
              </option>
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
          <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs my-3" />
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

export default AddItems;
