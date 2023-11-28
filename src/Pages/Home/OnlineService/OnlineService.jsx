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

// import banner from "../../../assets/home/chef-service.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OnlineService = () => {
  return (
    <section className="mb-10">
      <SectionTitle
        subTitle={"From 11:00am to 10:00pm"}
        title={"Order Online"}
      ></SectionTitle>
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
          <h1 className="text-center text-lg md:text-3xl font-semibold text-white -mt-8 md:-mt-16">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
          <h1 className="text-center text-lg md:text-3xl font-semibold text-white -mt-8 md:-mt-16">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
          <h1 className="text-center text-lg md:text-3xl font-semibold text-white -mt-8 md:-mt-16">
            Soup
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
          <h1 className="text-center text-lg md:text-3xl font-semibold text-white -mt-8 md:-mt-16">
            Cake
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
          <h1 className="text-center text-lg md:text-3xl font-semibold text-white -mt-8 md:-mt-16">
            Beef
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
          <h1 className="text-center text-lg md:text-3xl font-semibold text-white -mt-8 md:-mt-16">
            Thai Soup
          </h1>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={slider9} alt="" />
          <h1 className="text-center text-lg md:text-3xl font-semibold text-white -mt-8 md:-mt-16">
            Chawmin
          </h1>
        </SwiperSlide>
      </Swiper>

      <div className="bg-[url('https://i.ibb.co/4PL2BsM/bg.jpg')] my-20">
        <div className="text-center bg-black/50 p-20 mx-auto">
          <div className="bg-white p-10 w-3/4 mx-auto">
            <h1 className="text-4xl mb-5">Heavenly feast</h1>
            <p>
              Indulge in a culinary journey like no other at Heavenly Feast. Our
              restaurant is a haven for food lovers seeking a divine dining
              experience. With an eclectic menu that fuses global flavors with a
              touch of elegance, every dish is a masterpiece. From savory
              appetizers to delectable desserts, our chefs craft each plate with
              passion and precision. Immerse yourself in the warm ambiance,
              impeccable service, and heavenly flavors that make every visit to
              Heavenly Feast an unforgettable feast for the senses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineService;
