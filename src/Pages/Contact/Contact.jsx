import contactLottie from "../../assets/contact/contact.json";
import Lottie from "lottie-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div className="p-5 py-20 container mx-auto md:grid grid-cols-2">
      <SectionTitle
        subTitle={"Say hi!!"}
        title={"Contact"}
      ></SectionTitle>
      <div className="">
        <Lottie
          animationData={contactLottie}
          loop={true}
          className="w-full md:h-[500px]"
        />
      </div>
      <div className="">
        <form className="p-5 border rounded-lg shadow-xl card-body">
          <div className="">
            <div className="form-control">
              <label className="label">
                <p className="">Name</p>
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Name"
                className="outline outline-1 input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="">Email</p>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="outline outline-1 input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="">Message</p>
              </label>
              <textarea
                required
                name="message"
                className="outline outline-1 textarea"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="mt-6">
              <button className=" btn hover:-translate-y-1 btn-primary">
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
