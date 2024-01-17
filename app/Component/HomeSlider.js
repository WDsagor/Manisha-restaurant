"use client";
import React, { useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
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
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
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
