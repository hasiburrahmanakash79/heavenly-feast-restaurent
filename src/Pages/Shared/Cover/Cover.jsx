const Cover = ({ title, subTitle }) => {
  return (
    <div className="text-center text-white  bg-black bg-opacity-50 py-32 md:w-3/4 mx-auto">
      <h1 className="text-6xl font-semibold mb-3">{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Cover;
