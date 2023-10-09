const Cover = ({ title, subTitle }) => {
  return (
    <div className="text-center text-white p-5 md:p-24 md:w-1/2 mx-auto">
      <h1 className="text-6xl font-semibold mb-3">{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Cover;
