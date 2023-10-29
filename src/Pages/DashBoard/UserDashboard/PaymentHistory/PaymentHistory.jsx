import useHistory from "../../../../Hook/useHistory";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const [history] = useHistory();
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
                <th>Transaction ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded">
                        <img src={payment?.item?.image} />
                      </div>
                    </div>
                  </td>
                  <td>{payment?.item?.name}</td>
                  <td>${payment?.item?.price}</td>
                  <td>TranID: {payment?.tranId}</td>
                  <td className="bg-green-600 text-center text-xl">Paid</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
