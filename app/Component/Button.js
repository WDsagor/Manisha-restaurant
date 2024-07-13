import Link from "next/link";
import React from "react";

import { TbArrowBigRightLine } from "react-icons/tb";

const Button = () => {
  return (
    <div className="relative mx-1 w-[120px] rounded-lg">
      <div className=" duration-500 transition-colors border border-red-600 rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
        <Link
          href={"/restaurant#menu-items"}
          className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
        >
          <span className="">Order now</span>
          <span>
            <TbArrowBigRightLine />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Button;
