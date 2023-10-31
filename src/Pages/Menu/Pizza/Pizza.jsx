import useMenu from "../../../Hook/useMenu";
import SingleMenu from "../../../components/SingleMenu/SingleMenu";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Link } from "react-router-dom";

const Pizza = () => {
  const [menu] = useMenu();
  const offerMenu = menu.filter((offer) => offer.category === "pizza");
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/8Kw5vwW/pizza.jpg')] bg-cover md:bg-fixed my-10">
        <div className="p-12 md:p-20 bg-black/60">
          <SectionCover
            title={"Pizza"}
            subTitle={
              "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven."
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
            Order Pizza
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pizza;
