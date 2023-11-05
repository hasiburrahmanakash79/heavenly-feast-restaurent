import useBooking from "../../../../Hook/useBooking";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const MyBooking = () => {
  const [booking] = useBooking();
  return (
    <div className="p-5">
      <SectionTitle
        subTitle={"Happy user"}
        title={"manage user"}
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
            {booking.map((booked, index) => (
              <tr key={booked._id}>
                <th>{index + 1}</th>
                <td>{booked?.name}</td>
                <td>{booked?.email}</td>
                <td>wewew</td>
                <td>ewwew</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
