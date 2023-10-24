import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaCommentDots } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-10">
      <SectionTitle
        title={"Testimonials"}
        subTitle={"What Our Clients Say"}
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center items-center px-20 text-center">
                <Rating
                  className="my-3"
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                />
                <FaCommentDots className="text-5xl"></FaCommentDots>
                <p className="my-3">{review.details}</p>
                <h1 className="text-xl font-semibold text-yellow-500 uppercase ">
                  {review.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
