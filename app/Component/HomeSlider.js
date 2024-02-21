"use client";
import React, {  useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { Slider1 } from "./Slider1";
import Slider2 from "./Slider2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeSlider = () => {
  const [activeIndexId, setActiveIndexId]=useState(null)
  const activeSlideRef = useRef(null);
 
const slider = [1,2,3,4]
useGSAP(() => {
    const tl = gsap.timeline( {defaults: { delay: 0.5,  ease: "power3.easeOut" }});
    tl.fromTo(".text1", { x: -200, scale: 0.5, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, scale: 1 })
    .fromTo(
      ".image1",
      { scale: 1, opacity: 0, x: "100%" },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scale: 1,
        ease: "power3.inOut",
        overflow: "hidden",
      },
      "<30%"
    )
    .fromTo(".text2", { y: -100, scale: 0.5, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, scale: 1 })
    .fromTo(
      ".text3",
      { scale: 0.5, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        scale: 1,
        ease: "power3.inOut",
      },
      "<30%"
    )
    
   
    
  }, { dependencies: [activeIndexId], scope: activeSlideRef, revertOnUpdate: true});
  return (
    <>
      <Swiper ref={activeSlideRef}
        
        rewind={true}
        spaceBetween={30}
        onSlideChange={(el) => setActiveIndexId(el?.activeIndex)}
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
        {slider.map((item,index)=>{
         return <SwiperSlide key={index}>
          <div  >
       <div
         className="hero min-h-screen text-primary"
         style={{
           background: `url("/images/Home-bg-1280x1072-2880w.png")`,
           backgroundSize: "cover",
         }}
       >
         {/* <div className="hero-overlay bg-opacity-60"></div> */}
 
         <div className="hero min-h-screen max-w-screen-2xl mx-auto container box">
           <div className="hero-content flex-col lg:flex-row">
             <div className="image1 overflow-hidden">
               <Image src="/images/hero-1152w.webp" height={200} width={500} alt="backgorund" />
             </div>
 
             <div className="max-w-3xl">
               <h1 className={` text1 text-5xl font-bold text-primary`}>TRADITIONALl</h1>
               <h1 className="text2 text-5xl font-bold">INDIAN DELICACIES IN MEDWAY KENT</h1>
               <p className=" text3 py-6 ">
                 Looking for delectable Indian food? Welcome to Manisha, an authentic Indian restaurant in Medway, Kent.
                 We are open 7 days a week, including bank holidays. If you enjoy the flavours of Indian cuisine, please
                 visit us or call us to book a table.
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
         </SwiperSlide>
        })}
       
      </Swiper>
    </>
  );
};

export default HomeSlider;
