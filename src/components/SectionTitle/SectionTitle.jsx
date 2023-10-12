const SectionTitle = ({ subTitle, title }) => {
  return (
    <div>
      <div className="text-center md:w-1/4 mx-auto my-7">
        <p className="text-yellow-500 py-2">{subTitle}</p>
        <div className="mb-8 flex justify-center items-center">
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
          <h2 className="px-3 text-xl lg:text-3xl font-semibold uppercase">
            {title}
          </h2>
          <span className="h-1 w-14 rounded-3xl bg-gray-700" />
        </div>
        {/* <h2 className="text-3xl font-semibold border-y-4 uppercase py-2"></h2> */}
      </div>
    </div>
  );
};

export default SectionTitle;
