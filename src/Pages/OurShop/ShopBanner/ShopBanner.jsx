import Cover from "../../Shared/Cover/Cover";

const ShopBanner = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/Xx3CSZ0/banner2.jpg')] py-20 md:py-52 bg-fixed">
        <Cover
          title={"Our Shop"}
          subTitle={"Would you like to try a Dish"}
        ></Cover>
      </div>
    </div>
  );
};

export default ShopBanner;
