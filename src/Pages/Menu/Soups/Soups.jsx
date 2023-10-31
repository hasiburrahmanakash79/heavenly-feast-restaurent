import useMenu from "../../../Hook/useMenu";
import SingleMenu from "../../../components/SingleMenu/SingleMenu";
import SectionCover from "../../Shared/SectionCover/SectionCover";
import { Link } from "react-router-dom";

const Soups = () => {
  const [menu] = useMenu();
  const offerMenu = menu.filter((offer) => offer.category === "soup");
  return (
    <div>
      <div className="bg-[url('https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover md:bg-fixed my-10">
        <div className="p-12 md:p-20 bg-black/60">
          <SectionCover
            title={"Soups"}
            subTitle={
              "Soup is a primarily liquid food, generally served warm or hot (but may be cool or cold), that is made by combining ingredients of meat or vegetables with stock, milk, or water. Hot soups are additionally characterized by boiling solid ingredients in liquids in a pot until the flavors are extracted, forming a broth. Soups are similar to stews, and in some cases there may not be a clear distinction between the two; however, soups generally have more liquid (broth) than stews."
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
            Order Soup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Soups;
