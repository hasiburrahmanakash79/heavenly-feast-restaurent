const FoodDetailsCard = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="p-1">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} className="w-full" alt="Shoes" />
        </figure>
        <p className="bg-black bg-opacity-80 text-white p-1 px-2 rounded-2xl absolute right-5 top-5 ">
          Price: ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsCard;
