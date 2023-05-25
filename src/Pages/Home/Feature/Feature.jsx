import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Feature = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/kmrkrs8/featured.jpg')] bg-fixed my-10">
      <div className=" bg-black bg-opacity-70 pt-5 pb-20 px-10 md:px-28 text-white">
        <SectionTitle
          subTitle={"Check it out"}
          title={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-10">
          <div>
            <img src="https://i.ibb.co/kmrkrs8/featured.jpg" className="rounded-xl" alt="" />
          </div>
          <div>
            <p className="text-xl mt-4">November 03, 2024</p>
            <h1 className="text-2xl my-3 uppercase">Where can i get some?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              voluptate, molestiae esse ex quos quasi error saepe dolorum? Aut,
              aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Quo, fugiat.
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
