import React from "react";
import { TbArrowBigRightLine } from "react-icons/tb";

const Newslater = () => {
  return (
    <div className="bg-orange-50 py-20">
      <div className=" container mx-auto max-w-screen-2xl text-center ">
        <h1 className="text-6xl font-extrabold">JOIN FOR HOT OFFERS</h1>
        <p className="text-xl mt-4">
          If we go all out… We do it well! Subscribe to the newsletter <br /> to
          get the most exclusive promos.
        </p>
        <form className=" px-4 w-full flex justify-center self-center mt-10">
          <div className="w-full max-w-screen-md flex">
            <input
              className="input  w-full focus:outline-none focus:border-none"
              placeholder="Email"
            />
            <div className="relative mx-1 w-[150px] rounded-lg z-10">
              {/* <Button value="Order now" /> */}
              <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
                <button className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
                  <span className="text-xl">Subscribe</span>
                  <span>
                    <TbArrowBigRightLine />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newslater;
