const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-2 text-white text-center">
        <div className="bg-[#1F2937] p-10">
          <p className="text-2xl font-semibold">Contact Us</p>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br /> +88 01101412215 <br /> Mon -
            Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
          </p>
        </div>
        <div className="bg-[#111827] p-10">
          <h4 className="text-2xl font-semibold">Follow Us</h4>
          <p>Join us on social media</p>
          <div className="mx-auto grid grid-cols-3 gap-4 w-20">
            
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-black text-white">
        <div>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
