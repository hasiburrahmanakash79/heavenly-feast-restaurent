import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import slider6 from "../../../assets/home/slide6.jpg";
import slider7 from "../../../assets/home/slide7.jpg";
import slider8 from "../../../assets/home/slide8.jpg";
import slider9 from "../../../assets/home/slide9.jpg";

import banner from "../../../assets/home/chef-service.jpg";

const OnlineService = () => {
  return (
    <div className="mb-10">
      <div className="text-center my-7">
        <p className="text-yellow-500">---From 11:00am to 10:00pm---</p>
        <h2 className="text-3xl font-semibold">ORDER ONLINE</h2>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Cake
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Beef
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Thai Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Chicken
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} alt="" />
          <h1 className="text-center text-3xl font-semibold text-white -mt-16">
            Burger
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider9} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="my-20">
        <div className="relative w-full">
          <img src={banner} alt="" />
        </div>
        {/* <div className="text-center bg-white p-10 w-3/4 mx-auto absolute rounded-xl items-center left-0 right-0">
          <h1 className="text-4xl">Heavenly feast</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            nam eveniet adipisci! Voluptatum aliquid excepturi deleniti
            obcaecati illo non repellendus commodi, eveniet minus, quia
            dignissimos eius veniam sequi perspiciatis sint vero voluptate, quo
            dicta id doloremque dolore omnis officiis cupiditate repellat.
            Adipisci, ad accusamus tenetur ea molestiae aliquam et eum.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default OnlineService;
