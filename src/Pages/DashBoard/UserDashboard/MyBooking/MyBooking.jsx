import useBooking from "../../../../Hook/useBooking";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const MyBooking = () => {
  const [booking] = useBooking();
  console.log(booking);
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
              <th>Person</th>
              <th>Phone</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((booked, index) => (
              <tr key={booked._id}>
                <th>{index + 1}</th>
                <td>{booked?.name}</td>
                <td>{booked?.email}</td>
                <td>{booked?.person}</td>
                <td>{booked?.phone}</td>
                <td>{booked?.time}</td>
                <td>{booked?.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
