import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageBooking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/booking");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setBooking(result);
      } catch (error) {
        setBooking(error.message);
      }
    };

    fetchData();
  }, []);

  console.log(booking);

  return (
    <div className="p-5">
      <SectionTitle title={"manage Booking"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Person</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((bookTable, index) => (
              <tr key={bookTable._id}>
                <th>{index + 1}</th>
                <td>{bookTable?.name}</td>
                <td>{bookTable?.phone}</td>
                <td>{bookTable?.email}</td>
                <td>{bookTable?.date}</td>
                <td>{bookTable?.time}</td>
                <td>{bookTable?.person} person</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
