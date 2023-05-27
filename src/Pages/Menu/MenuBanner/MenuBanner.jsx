import Cover from "../../Shared/Cover/Cover";

const MenuBanner = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/sCXw8rD/banner3.jpg')] py-20 md:py-52 bg-fixed">
        <Cover
          title={"Our Menu"}
          subTitle={"Would you like to try a Dish"}
        ></Cover>
      </div>
    </div>
  );
};

export default MenuBanner;
