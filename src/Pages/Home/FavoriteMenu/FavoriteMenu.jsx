import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleMenu from "../../../components/SingleMenu/SingleMenu";
import useMenu from "../../../Hook/useMenu";
import { Link } from "react-router-dom";


const FavoriteMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        title={"From Our Menu"}
        subTitle={"Check it out"}
      ></SectionTitle>

      <div className="md:grid grid-cols-2 gap-5 my-5 px-2">
        {popularItem.map((item) => (
          <SingleMenu key={item._id} item={item}></SingleMenu>
        ))}
      </div>

      <div className="mt-10 flex flex-col justify-center items-center">
        <Link to='/menu'>
          <button className="btn btn-outline border-0 border-b-4 mb-7 ">
            View more Items
          </button>
        </Link>
      </div>
    </section>
  );
};

export default FavoriteMenu;
