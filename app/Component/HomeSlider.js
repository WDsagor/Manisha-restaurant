"use client";
import React, { useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen text-white "
            style={{
              background: `url("/images/Home-bg-1280x1072-2880w.png")`,
              backgroundSize: "cover",
            }}
          >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}

            <div className="hero min-h-screen max-w-screen-2xl mx-auto">
              <div className="hero-content flex-col lg:flex-row">
                <div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "backInOut", duration: 1 }}
                >
                  <Image
                    src="/images/hero-1152w.webp"
                    height={200}
                    width={500}
                  />
                </div>
                <div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ x: 100, opacity: 1 }}
                  transition={{ ease: "backInOut", duration: 1 }}
                  className=" max-w-3xl"
                >
                  <h1 className=" text-5xl font-bold text-primar">
                    TRADITIONALl
                  </h1>
                  <h1 className="text-5xl font-bold">
                    INDIAN DELICACIES IN MEDWAY KENT
                  </h1>
                  <p className=" py-6">
                    Looking for delectable Indian food? Welcome to Manisha, an
                    authentic Indian restaurant in Medway, Kent. We are open 7
                    days a week, including bank holidays. If you enjoy the
                    flavours of Indian cuisine, please visit us or call us to
                    book a table.
                  </p>

                  <div transition={{ ease: "easeOut", duration: 3 }}>
                    <Link
                      href={"/restaurant"}
                      className="relative overflow-hidden"
                    >
                      <Button value={"Order Now"} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen text-white "
            style={{
              background: `url("/images/Home-bg-1280x1072-2880w.png")`,
              backgroundSize: "cover",
            }}
          >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}

            <div className="hero min-h-screen max-w-screen-2xl mx-auto">
              <div className="hero-content flex-col lg:flex-row">
                <div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "backInOut", duration: 1 }}
                >
                  <Image
                    src="/images/hero-1152w.webp"
                    height={200}
                    width={500}
                  />
                </div>
                <div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ x: 100, opacity: 1 }}
                  transition={{ ease: "backInOut", duration: 1 }}
                  className=" max-w-3xl"
                >
                  <h1
                    className=" item text-5xl font-bold text-primary"
                    data-value="7"
                  >
                    TRADITIONAAL
                  </h1>
                  <h1 className="text-5xl font-bold item" data-value="10">
                    INDIAN DELICACIES IN MEDWAY KENT
                  </h1>
                  <p className="py-6 item" data-value="12">
                    Looking for delectable Indian food? Welcome to Manisha, an
                    authentic Indian restaurant in Medway, Kent. We are open 7
                    days a week, including bank holidays. If you enjoy the
                    flavours of Indian cuisine, please visit us or call us to
                    book a table.
                  </p>

                  <div transition={{ ease: "easeOut", duration: 3 }}>
                    <Link
                      href={"/restaurant"}
                      className="relative overflow-hidden"
                    >
                      <Button value={"Order Now"} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen text-white "
            style={{
              background: `url("/images/Home-bg-1280x1072-2880w.png")`,
              backgroundSize: "cover",
            }}
          >
            {/* <div className="hero-overlay bg-opacity-60"></div> */}

            <div className="hero min-h-screen max-w-screen-2xl mx-auto">
              <div className="hero-content flex-col lg:flex-row">
                <div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "backInOut", duration: 1 }}
                >
                  <Image
                    src="/images/hero-1152w.webp"
                    height={200}
                    width={500}
                  />
                </div>
                <div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ x: 100, opacity: 1 }}
                  transition={{ ease: "backInOut", duration: 1 }}
                  className=" max-w-3xl"
                >
                  <h1 className="text-5xl font-bold text-primary">
                    TRADITIONAL
                  </h1>
                  <h1 className="text-5xl font-bold">
                    INDIAN DELICACIES IN MEDWAY KENT
                  </h1>
                  <p className="py-6">
                    Looking for delectable Indian food? Welcome to Manisha, an
                    authentic Indian restaurant in Medway, Kent. We are open 7
                    days a week, including bank holidays. If you enjoy the
                    flavours of Indian cuisine, please visit us or call us to
                    book a table.
                  </p>

                  <div transition={{ ease: "easeOut", duration: 3 }}>
                    <Link
                      href={"/restaurant"}
                      className="relative overflow-hidden"
                    >
                      <Button value={"Order Now"} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
