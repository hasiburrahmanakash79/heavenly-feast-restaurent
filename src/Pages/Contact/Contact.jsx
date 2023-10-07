import contactLottie from '../../assets/contact/contact.json'
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <div className="p-5">
        <div className="mb-8 md:w-1/2 md:mb-0">
            <Lottie
              animationData={contactLottie}
              loop={true}
              className="w-full md:h-[500px]"
            />
          </div>
      <div className="w-full md:gap-10">
        <form className="pb-5 border-2 rounded-lg shadow-md card-body">
          <h1 className="pb-2 text-primary text-3xl md:text-4xl text-center">
            Any Time
          </h1>
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
