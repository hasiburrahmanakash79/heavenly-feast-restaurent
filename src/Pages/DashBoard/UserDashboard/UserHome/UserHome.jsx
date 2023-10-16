const UserHome = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold">Hi, Welcome Back! </h1>
      <div className="grid grid-cols-2 h-40">
        <div className="bg-violet-300">
          <h1>user name </h1>
        </div>
        <div className="bg-yellow-200">
          <h1>user info</h1>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
