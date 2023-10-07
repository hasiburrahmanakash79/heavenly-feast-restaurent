import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/Rpx5Kqd/banner1.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/t8pYQhc/banner2.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/PCNY2fL/banner3.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/T2hGw1T/banner4.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/C18f7G5/banner5.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/WttdPZG/banner6.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
