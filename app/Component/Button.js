import Link from "next/link";
import React from "react";

import { TbArrowBigRightLine } from "react-icons/tb";

const Button = ({ value }) => {
  return (
    <div className="relative mx-1 w-[118px]">
      {/* <Button value="Order now" /> */}
      <div className=" duration-500 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-md before:hover:scale-x-0 text-white">
        <button className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-md before:hover:scale-x-100">
          <span className="">Order now</span>
          <span>
            <TbArrowBigRightLine />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Button;
