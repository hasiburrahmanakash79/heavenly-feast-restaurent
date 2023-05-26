import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import SingleMenu from "./SingleMenu";

const FavoriteMenu = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((menu) => menu.category === "popular");
        setFoods(popularMenu);
        console.log(popularMenu);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        title={"From Our Menu"}
        subTitle={"Check it out"}
      ></SectionTitle>
      <div className="md:grid grid-cols-2 gap-5 my-5 px-2">
        {foods.map((food) => (
          <SingleMenu key={food._id} food={food}></SingleMenu>
        ))}
      </div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <button className="btn btn-outline border-0 border-b-4 mb-7 ">
          View more Items
        </button>
        <div className="bg-black h-52 w-full flex items-center justify-center">
          <h2 className="text-5xl text-center text-white">
            Call Us: +088 01722-545468
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FavoriteMenu;
