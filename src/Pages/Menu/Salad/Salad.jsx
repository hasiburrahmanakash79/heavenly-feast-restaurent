import useMenu from "../../../Hook/useMenu";
import SingleMenu from "../../../components/SingleMenu/SingleMenu";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Link } from "react-router-dom";

const Salad = () => {
  const [menu] = useMenu();
  const offerMenu = menu.filter((offer) => offer.category === "salad");
  return (
    <div>
      <div className="bg-[url('https://images.unsplash.com/photo-1475332363216-323c9b7f1e81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80')] bg-cover md:bg-fixed my-10">
        <div className="p-12 md:p-20 bg-black/60">
          <SectionCover
            title={"Salads"}
            subTitle={
              "A salad is a dish consisting of mixed ingredients, frequently vegetables. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad."
            }
          ></SectionCover>
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-5 my-5 px-2 container mx-auto">
        {offerMenu.map((item) => (
          <SingleMenu key={item._id} item={item}></SingleMenu>
        ))}
      </div>
      <div className="text-center">
        <Link to="/shop">
          <button className="btn btn-outline  border-0 border-b-4 mb-7 ">
            Order Salad
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Salad;
