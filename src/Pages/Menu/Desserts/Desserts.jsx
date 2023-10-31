import useMenu from "../../../Hook/useMenu";
import SingleMenu from "../../../components/SingleMenu/SingleMenu";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Link } from "react-router-dom";

const Desserts = () => {
  const [menu] = useMenu();
  const offerMenu = menu.filter((offer) => offer.category === "dessert");
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/3sChPtK/dessert-bg.jpg')] bg-cover md:bg-fixed my-10">
        <div className="p-12 md:p-20 bg-black/60">
          <SectionCover
            title={"Desserts"}
            subTitle={
              "Dessert is a course that concludes a meal. The course consists of sweet foods, such as candy, and possibly a beverage such as dessert wine and liqueur. Some cultures sweeten foods that are more commonly savory to create desserts. In some parts of the world there is no tradition of a dessert course to conclude a meal."
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
            Order Dessert
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Desserts;
