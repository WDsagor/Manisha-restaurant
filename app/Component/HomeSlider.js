"use client";
import React, { useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { Slider1 } from "./Slider1";
import Slider2 from "./Slider2";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        rewind={true}
        spaceBetween={30}
        effect="fade"
        centeredSlides={true}
        autoHeight={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
