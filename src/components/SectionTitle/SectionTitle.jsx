const SectionTitle = ({subTitle, title}) => {
  return (
    <div>
      <div className="text-center md:w-1/4 mx-auto my-7">
        <p className="text-yellow-500 py-2">---{subTitle}---</p>
        <h2 className="text-3xl font-semibold border-y-4 uppercase py-2">{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
