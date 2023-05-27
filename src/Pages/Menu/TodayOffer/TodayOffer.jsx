import useMenu from "../../../Hook/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleMenu from "../../../components/SingleMenu/SingleMenu";

const TodayOffer = () => {
  const [menu] = useMenu();
  const offerMenu = menu.filter((offer) => offer.category === "offered");
  return (
    <div>
      <SectionTitle
        subTitle={"Do not miss"}
        title={"Today Offer"}
      ></SectionTitle>
      <div className="md:grid grid-cols-2 gap-5 my-5 px-2">
        {offerMenu.map((item) => (
          <SingleMenu key={item._id} item={item}></SingleMenu>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline  border-0 border-b-4 mb-7 ">
          Order Your Favorite Foods
        </button>
      </div>
    </div>
  );
};

export default TodayOffer;
