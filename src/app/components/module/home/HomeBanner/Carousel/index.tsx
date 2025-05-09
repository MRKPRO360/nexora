'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Slide from './Slide';

function Carousel() {
  return (
    <Swiper
      // Configure Swiper parameters here
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={50}
      loop={true}
      autoplay={{
        delay: 100000,
        // disableOnInteraction: false,
      }}
    >
      <SwiperSlide className="pt-10 px-11">
        <Slide />
      </SwiperSlide>

      <SwiperSlide className="pt-10 px-11">
        <Slide />
      </SwiperSlide>
      <SwiperSlide className="pt-10 px-11">
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carousel;
