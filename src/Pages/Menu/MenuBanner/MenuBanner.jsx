import Cover from "../../Shared/Cover/Cover";

const MenuBanner = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/sCXw8rD/banner3.jpg')] bg-cover md:bg-fixed">
        <div className="py-20 md:py-32  bg-black/60">
        <Cover
          title={"Our Menu"}
          subTitle={"Would you like to try a Dish"}
        ></Cover>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
