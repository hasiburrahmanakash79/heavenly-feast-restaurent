import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Feature = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/kmrkrs8/featured.jpg')] bg-fixed my-10">
      <div className=" bg-black bg-opacity-70 pt-5 pb-20 px-10 md:px-28 text-white">
        <SectionTitle
          subTitle={"Check it out"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:grid grid-cols-2 justify-center items-center gap-10">
          <div>
            <img src="https://i.ibb.co/kmrkrs8/featured.jpg" className="rounded-xl" alt="" />
          </div>
          <div>
            <h1 className="text-5xl font-bold my-3">Why Heavenly Feast?</h1>
            <p>
            Indulge in a culinary journey like no other at Heavenly Feast. Our restaurant is a haven for food lovers seeking a divine dining experience. With an eclectic menu that fuses global flavors with a touch of elegance, every dish is a masterpiece. From savory appetizers to delectable desserts, our chefs craft each plate with passion and precision. Immerse yourself in the warm ambiance, impeccable service, and heavenly flavors that make every visit to Heavenly Feast an unforgettable feast for the senses. Join us and savor the taste of paradise on every plate.
            </p>
            <button className="btn btn-outline btn-warning border-0 border-b-4 mt-3 ">
              Order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
