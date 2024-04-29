// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

import './Banner.css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// import required modules

export default function Banner() {
  return (
    <>
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <div className="slide slide1"></div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="slide slide2"></div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="slide slide3"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
