import UseTitle from "../../../../Hook/UseTitle";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";


const Payment = () => {
    UseTitle('Payment')
    return (
        <div>
            <SectionTitle subTitle={'Pay now'} title={'Payment'}></SectionTitle>
            
        </div>
    );
};

export default Payment;