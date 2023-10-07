
const Contact = () => {
    return (
        <div className="bg-gray-100 p-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
            <p className="text-gray-700 mb-4">
              Feel free to get in touch with us for any inquiries or bookings. We well be happy to assist you!
            </p>
            <form className="grid grid-cols-1 gap-6">
              <div className="form-group">
                <label htmlFor="name" className="text-gray-800 font-semibold">Name</label>
                <input type="text" id="name" name="name" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-gray-800 font-semibold">Email</label>
                <input type="email" id="email" name="email" className="input-field" />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="text-gray-800 font-semibold">Message</label>
                <textarea id="message" name="message" rows="4" className="input-field" />
              </div>
              <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      );
};

export default Contact;