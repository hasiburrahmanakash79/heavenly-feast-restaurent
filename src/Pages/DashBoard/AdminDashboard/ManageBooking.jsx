import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageBooking = () => {
  return (
    <div className="p-5">
      <SectionTitle
        title={"manage Booking"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>index + 1</th>
              <td>user.name</td>
              <td>user.email</td>
              <td>asdsd</td>
              <td>asd</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
