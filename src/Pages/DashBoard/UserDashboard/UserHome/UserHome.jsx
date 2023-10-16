const UserHome = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold">Hi, Welcome Back! </h1>
      <div className="grid grid-cols-2 h-40">
        <div className="bg-violet-300 grid-flow-row justify-center items-center">
          <div className="avatar">
            <div className="w-40 rounded-full">
              <img src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1261" />
            </div>
          </div>
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
