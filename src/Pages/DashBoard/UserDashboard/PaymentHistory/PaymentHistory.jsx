import useHistory from "../../../../Hook/useHistory";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const [history] = useHistory()
  console.log(history);
  return (
    <div className="p-10">
      <div>
        <SectionTitle title={"Payment History"}></SectionTitle>
      </div>
      <div className="border p-5 rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Food Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ajskdhjk</td>
                <td>ajskdhjk</td>
                <td>ajskdhjk</td>
                <td>ajskdhjk</td>
                <td>ajskdhjk</td>
                <td>ajskdhjk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
