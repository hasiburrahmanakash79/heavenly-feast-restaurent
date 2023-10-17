import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Booking from "./Booking";

const Reservation = () => {
  return (
    <div>
      <div>
        <SectionTitle title={"Book a table"}></SectionTitle>
        <Booking/>
      </div>
    </div>
  );
};

export default Reservation;
