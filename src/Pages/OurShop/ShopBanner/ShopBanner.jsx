import Cover from "../../Shared/Cover/Cover";

const ShopBanner = () => {
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/k2NLVXk/shop.jpg')] bg-fixed">
        <div className="py-20 md:py-52 bg-black/50">
          <Cover
            title={"Our Shop"}
            subTitle={
              "Heavenly Feast is a culinary paradise where flavors and ambiance unite to create an unforgettable dining experience. Nestled in the heart of [City Name], our restaurant offers a diverse menu inspired by international cuisines, prepared with locally-sourced, fresh ingredients. From mouthwatering appetizers to delectable entrees and heavenly desserts, every dish is crafted with passion and precision."
            }
          ></Cover>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
