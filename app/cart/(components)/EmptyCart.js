import Link from "next/link";
import React from "react";
import { FaBasketShopping } from "react-icons/fa6";
import { TbArrowBigRightLine } from "react-icons/tb";

const EmptyCart = () => {
  return (
    <div>
      <div className="card  w-1/2 mx-auto py-20">
        <figure className=" text-slate-400">
          <FaBasketShopping size={100} />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className=" text-4xl font-bold">
            Your Cart is <span className="text-red-600">Empty!</span>
          </h2>
          <p className="pb-10">
            If a dog chews shoes whose shoes does he choose?
          </p>

          <div className="relative w-[200px] rounded-lg z-10">
            <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
              <Link
                href={"/restaurant#menu-items"}
                className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
              >
                <span className="">Go to Restaurant page </span>
                <span>
                  <TbArrowBigRightLine />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
