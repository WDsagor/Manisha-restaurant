"use client";
import React from "react";

import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";

const TandooriDishesSlider = () => {
  const tandooriDishes = [
    {
      id: 1,
      name: "Lamb Shashlick",
      discription:
        "Lamb with tomatoes, green pepper and onion cooked in the clay oven. Served with salad",
      imgUrl: "/images/food2.png",
    },
    {
      id: 2,
      name: "Chicken Tikka",
      discription:
        "Spring chicken on the bone, marinated and grilled in the tandoori oven. Served with salad",
      imgUrl: "/images/food1.png",
    },
    {
      id: 3,
      name: "Lamb Tikka",
      discription:
        "Spring chicken on the bone, marinated and grilled in the tandoori oven. Served with salad",
      imgUrl: "/images/food2.png",
    },
    {
      id: 4,
      name: "Tandoori Chicken {Half)",
      discription:
        "Chicken tikka, seekh kebab, lamb tikka, tandoori chicken, tandoori king prawn. Served with salad",
      imgUrl: "/images/food1.png",
    },
    {
      id: 5,
      name: "Chicken Shashlick",
      discription:
        "Spring chicken on the bone, marinated and grilled in the tandoori oven. Served with salad",
      imgUrl: "/images/food2.png",
    },
    {
      id: 6,
      name: "King Prawn Shashlick",
      discription:
        "King prawns with tomatoes, green pepper and onion cooked in the clay oven. Served with salad",
      imgUrl: "/images/food1.png",
    },
    {
      id: 7,
      name: "Salmon Tikka",
      discription:
        "Pieces of salmon cooked in the clay oven with exotic spices. Served with salad",
      imgUrl: "/images/food2.png",
    },
    {
      id: 8,
      name: "Murg Malai Tikka",
      discription:
        "Boneless chicken, marintated with ginger, garlic, cheddar cheese and fresh cream ",
      imgUrl: "/images/food1.png",
    },
  ];
  return (
    <div>
      <Swiper
        spaceBetween={10}
        autoHeight={true}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {tandooriDishes.map(({ id, name, discription, imgUrl }) => {
          return (
            <SwiperSlide key={id}>
              <div className="card w-auto px-4 mb-6 group">
                <figure className=" group-hover:scale-105 transition-all duration-300 py-5 overflow-hidden">
                  <Image width={350} height={350} src={imgUrl} alt={name} />
                </figure>
                <div className="text-center leading-normal">
                  <h2 className=" cursor-pointer text-center transition-all text-3xl uppercase font-bold pt-10 hover:text-red-600">
                    {name}
                  </h2>
                  <p className="text-xl font-light">{discription}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TandooriDishesSlider;
