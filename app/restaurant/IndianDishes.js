import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbArrowBigRightLine } from "react-icons/tb";

const IndianDishes = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(/images/menu-image.png)",
          // backgroundImage: "url(/images/Home-bg-1280x1072-2880w.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black"></div>
        <div className="hero text-primary py-20 px-2">
          <div className="hero-content text-left flex-col lg:flex-row gap-10">
            <Image
              height={500}
              width={600}
              src="/images/food2.png"
              className=""
            />
            <div>
              <h1 className="text-5xl font-bold leading-snug">
                Your local restaurant for <br /> Indian dishes
              </h1>
              <p className="pt-6 text-accent">
                If you wish to have a wonderful private dining experience with
                your loved ones, book a table at Manisha. The decor of our
                restaurant reflects Indian traditions and we prepare authentic
                Indian and Bangladeshi dishes with quality ingredients and the
                freshest produce. We take great pride in our level of service
                and have a growing number of repeat customers. Savour the taste
                of original Indian cuisine and the flavours and colours of the
                Indian food culture.
              </p>
              <br />
              <p className="pb-10 text-accent">
                We have wheelchair accessibility for our customers with limited
                physical mobility.
              </p>
              <div className="relative w-[142px] rounded-lg">
                <div className="duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
                  <Link
                    href={"/take-away"}
                    className=" py-2 duration-500 flex gap-1 px-3 justify-center items-center rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
                  >
                    <span className="text-lg">Booking now</span>
                    <span>
                      <TbArrowBigRightLine />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianDishes;
