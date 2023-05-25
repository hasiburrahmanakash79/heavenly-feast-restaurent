const SingleMenu = ({ food }) => {
  const { image, name, price, recipe } = food;
  return (
    <div className="flex justify-between gap-5 mb-5">
      <img src={image} className="w-[110px]" style={{borderRadius: '0px 200px 200px 200px'}} alt="" />
      <div>
        <h1>{name} --------------</h1>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600 text-lg">${price}</p>
    </div>
  );
};

export default SingleMenu;
