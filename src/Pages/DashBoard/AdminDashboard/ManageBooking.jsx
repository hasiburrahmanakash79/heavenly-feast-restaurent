import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

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


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      // }).then((result) => {
      //   if (result.isConfirmed) {
      //     axiosSecure.delete(`/menu/${id}`).then((res) => {
      //       if (res.data.deletedCount == 0) {
      //         refetch();
      //         Swal.fire("Deleted!", "Your file has been deleted.", "success");
      //       }
      //     });
      //   }
      // });
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
            }
          });
      }
    });
  };

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
                  <button onClick={() => handleDelete(bookTable._id)} className="btn btn-primary btn-sm">delete</button>
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
