import useMenu from "../../../Hook/useMenu";
import SingleMenu from "../../../components/SingleMenu/SingleMenu";
import SectionCover from "../../Shared/SectionCover/SectionCover";

const Soups = () => {
    const [menu] = useMenu();
  const offerMenu = menu.filter((offer) => offer.category === "soup");
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/kQwTMvT/soup-bg.jpg')] p-16 my-10">
        <SectionCover
          title={"Soups"}
          subTitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></SectionCover>
      </div>
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

export default Soups;