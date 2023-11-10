import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageBooking = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://heavenly-feast-server.vercel.app/booking")
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="p-5">
      <SectionTitle title={"manage Booking"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Person</th>
              <th>Action</th>
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
                <td>
                  <button className="btn btn-primary btn-sm">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
