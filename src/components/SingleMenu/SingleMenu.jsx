const SingleMenu = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="grid md:grid-cols-6 grid-cols-4 gap-5 border p-5 rounded-lg shadow-lg mb-3 md:mb-0">
      <div className="avatar indicator col-span-1">
        <span className="indicator-item badge badge-warning">${price}</span>
        <div className="w-20 rounded-lg">
          <img src={image} />
        </div>
      </div>
      <div className="md:col-span-4 col-span-2">
        <h1>{name}</h1>
        <p>{recipe}</p>
      </div>
      <p className="border p-2 rounded-lg col-span-1">Price: ${price}</p>
    </div>
  );
};

export default SingleMenu;
