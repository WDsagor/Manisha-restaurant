"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";

import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeSlider = () => {
  const [activeIndexId, setActiveIndexId] = useState(0);
  const activeSlideRef = useRef(null);

  const slideData = [
    {
      id: 1,
      title1: "TRADITIONAL",
      title2: "INDIAN DELICACIES IN MEDWAY KENT",
      description:
        "Looking for delectable Indian food? Welcome to Manisha, an authentic Indian restaurant in Medway, Kent. We are open 7 days a week, including bank holidays. If you enjoy the flavours of Indian cuisine, please visit us or call us to book a table.",
      image: "/images/hero-1152w.webp",
      bgImage: "/images/Home-bg-1280x1072-2880w.png",
      buttonText: "Book a Table",
      animations: {
        text1: {
          from: { x: -200, scale: 0.5, opacity: 0 },
          to: { x: 0, opacity: 1, scale: 1, duration: 0.5 },
        },
        image: {
          from: { scale: 0.8, opacity: 0, x: "100%" },
          to: { x: 0, opacity: 1, duration: 1, scale: 1 },
        },
        text2: {
          from: { y: -100, scale: 0.5, opacity: 0 },
          to: { y: 0, opacity: 1, duration: 0.5, scale: 1 },
        },
        text3: {
          from: { scale: 0.5, opacity: 0 },
          to: { opacity: 1, duration: 0.5, scale: 1 },
        },
      },
    },
    {
      id: 2,
      title1: "FRESH & AUTHENTIC",
      title2: "EXPERIENCE THE TASTE OF INDIA",
      description:
        "Our chefs use only the finest ingredients to bring you authentic Indian cuisine. From aromatic curries to sizzling tandoori dishes, every meal is prepared with passion and expertise.",
      image: "/images/foodImages/Murg Malai Tikka.jpg",
      bgImage: "/images/Home-bg2-1280x1072-2880w.png",
      buttonText: "View Menu",
      animations: {
        text1: {
          from: { y: -100, rotation: -15, opacity: 0 },
          to: { y: 0, rotation: 0, opacity: 1, duration: 0.6 },
        },
        image: {
          from: { scale: 1.2, opacity: 0, y: "50%" },
          to: { y: 0, opacity: 1, duration: 1.2, scale: 1 },
        },
        text2: {
          from: { x: 200, opacity: 0 },
          to: { x: 0, opacity: 1, duration: 0.7 },
        },
        text3: {
          from: { scale: 0, opacity: 0 },
          to: { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.2)" },
        },
      },
    },
    {
      id: 3,
      title1: "FAMILY FRIENDLY",
      title2: "WARM ATMOSPHERE & EXCELLENT SERVICE",
      description:
        "Enjoy a warm and welcoming atmosphere perfect for family gatherings, romantic dinners, or business meetings. Our friendly staff ensures you have a memorable dining experience.",
      image: "/images/foodImages/Chicken Chat Puree.jpg",
      bgImage: "/images/Home-bg3-1280x1072-2880w.png",
      buttonText: "Reserve Now",
      animations: {
        text1: {
          from: { x: -150, opacity: 0, skewX: 20 },
          to: { x: 0, opacity: 1, skewX: 0, duration: 0.5 },
        },
        image: {
          from: { scale: 0.6, opacity: 0, rotate: -20 },
          to: { scale: 1, opacity: 1, rotate: 0, duration: 1 },
        },
        text2: {
          from: { y: 150, opacity: 0 },
          to: { y: 0, opacity: 1, duration: 0.6 },
        },
        text3: {
          from: { x: -100, opacity: 0 },
          to: { x: 0, opacity: 1, duration: 0.7 },
        },
      },
    },
    {
      id: 4,
      title1: "TAKEAWAY AVAILABLE",
      title2: "ENJOY AUTHENTIC INDIAN FOOD AT HOME",
      description:
        "Can't dine with us? No problem! Order our delicious food for takeaway and enjoy the same authentic flavors in the comfort of your home. Call us to place your order.",
      image: "/images/foodImages/Chicken Tikka Pakora.jpg",
      bgImage: "/images/Home-bg4-1280x1072-2880w.png",
      buttonText: "Order Now",
      animations: {
        text1: {
          from: { scale: 2, opacity: 0 },
          to: { scale: 1, opacity: 1, duration: 0.5 },
        },
        image: {
          from: { x: "-100%", opacity: 0 },
          to: { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
        },
        text2: { from: { opacity: 0 }, to: { opacity: 1, duration: 0.8 } },
        text3: {
          from: { y: 100, opacity: 0 },
          to: { y: 0, opacity: 1, duration: 0.6, delay: 0.2 },
        },
      },
    },
  ];
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.easeOut" } });

      tl.fromTo(
        ".text1",
        slideData[activeIndexId]?.animations?.text1?.from,
        slideData[activeIndexId]?.animations?.text1?.to,
        0,
      )
        .fromTo(
          ".image1",
          slideData[activeIndexId]?.animations?.image?.from,
          slideData[activeIndexId]?.animations?.image?.to,
          "<0.2",
        )
        .fromTo(
          ".text2",
          slideData[activeIndexId]?.animations?.text2?.from,
          slideData[activeIndexId]?.animations?.text2?.to,
          "<0.3",
        )
        .fromTo(
          ".text3",
          slideData[activeIndexId]?.animations?.text3?.from,
          slideData[activeIndexId]?.animations?.text3?.to,
          "<0.4",
        );
    },
    {
      dependencies: [activeIndexId],
      scope: activeSlideRef,
      revertOnUpdate: true,
    },
  );
  return (
    <>
      <Swiper
        ref={activeSlideRef}
        rewind={true}
        spaceBetween={30}
        onSlideChange={(swiper) => setActiveIndexId(swiper?.activeIndex)}
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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
      >
        {slideData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <div
                  className="hero min-h-screen text-primary"
                  style={{
                    background: `url("/images/Home-bg-1280x1072-2880w.png")`,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <div className="hero-overlay bg-opacity-60"></div> */}

                  <div className="hero min-h-screen max-w-screen-2xl mx-auto container box">
                    <div className="hero-content flex-col lg:flex-row gap-12">
                      <div className="image1 overflow-hidden flex-1">
                        <Image
                          src={`${item?.image}`}
                          height={200}
                          className="rounded-lg shadow-2xl food-img"
                          width={500}
                          alt="backgorund"
                        />
                      </div>

                      <div className="max-w-3xl flex-1">
                        <h1
                          className={` text1 text-5xl font-bold text-primary`}
                        >
                          {item?.title1}
                        </h1>
                        <h1 className="text2 text-5xl font-bold mt-4">
                          {item?.title2}
                        </h1>
                        <p className=" text3 py-6  text-lg">
                          {item?.description}
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary mt-4 px-8 py-3 rounded-lg hover:scale-105 transition-transform"
                        >
                          {item?.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HomeSlider;
