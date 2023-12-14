const SingleMenu = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="grid md:grid-cols-6 grid-cols-4 gap-5 border p-5 rounded-lg shadow-lg mb-3 md:mb-0">
      
      <p className="border p-2 rounded-lg col-span-1">Price: ${price}</p>
    </div>
  );
};

export default SingleMenu;
