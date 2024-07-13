import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbArrowBigRightLine } from "react-icons/tb";

const HappySudadyArea = () => {
  return (
    <section className=" bg-red-700 h-[550px] relative w-full overflow-hidden">
      <Image
        className="absolute  left-0 bottom-[0%] overflow-visible"
        src="/images/food4.png"
        height={100}
        width={200}
        alt="food"
      />
      <Image
        className="absolute right-0 top-[20%]"
        src="/images/food3.png"
        height={100}
        width={200}
        alt="food"
      />
      <Image
        className=" absolute top-[-5%] left-[10%]"
        src="/images/tomato1.png"
        height={200}
        width={200}
        alt="food"
      />
      <Image
        className="absolute bottom-[-10%] left-[40%]"
        src="/images/tomato1.png"
        height={200}
        width={200}
        alt="food"
      />
      <div
        className=" absolute top-0 left-0 w-full h-full "
        style={{
          background: `url("/images/bg_texture.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="px-2 py-10 text-center relative">
          <Image
            className="flex mx-auto"
            src="/images/leaf.png"
            height={600}
            width={600}
            alt="leaf"
          />

          <div className=" absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className=" text-xs md:text-xl lg:text-2xl text-yellow-400 font-bold">
              40% OFF ALL PREMIUM FOOD
            </h1>
            <h1 className=" text-3xl md:text-5xl lg:text-7xl text-white font-bold leading-normal">
              HAPPY SUNDAY
            </h1>
            <p className="text-white">
              We use only the best ingredients for our unique recipes <br />
              passed down through generations.
            </p>
            <div className="relative mx-auto my-10 w-[135px] hover:text-white text-red-600 ">
              <div className=" duration-300 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:bg-white before:transition-transform before:duration-300 before:content-[''] before:rounded-md before:hover:scale-x-0  ">
                <Link
                  href={"/restaurant#menu-items"}
                  className="duration-300 flex gap-1 px-5 justify-center items-center py-3 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-md before:hover:scale-x-100"
                >
                  <span className="">Order now</span>
                  <span>
                    <TbArrowBigRightLine />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappySudadyArea;
