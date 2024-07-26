"use client";
import { useState } from "react";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

const Guest = ({ tableReserved, errors, handleNext, handleBack }) => {
  const guests = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  const [activeIndex, setActiveIndex] = useState(guests[0]);
  return (
    <div>
      <h1 className="text-3xl text-center mt-10">How many guests ? </h1>
      <section>
        <div className="grid gap-5 grid-cols-5 py-10">
          {guests.map((number, i) => {
            return (
              <button
                onClick={(i) => setActiveIndex(number)}
                key={i}
                className={`btn btn-circle  btn-lg ${
                  activeIndex === guests[i]
                    ? "btn-neutral  text-white"
                    : "btn-outline"
                }`}
              >
                {number}
              </button>
            );
          })}
        </div>
        {/* <div className="form-control w-full">
          <label className="label ">
            <span className="  after:content-['*'] after:ml-0.5 after:text-red-500">
              Guests number
            </span>
          </label>
          <input
            {...tableReserved("guests", {
              required: true,
            })}
            type="number"
            placeholder="Enter your guests number"
            className="input input-bordered w-full"
          />
          {errors.guests?.type === "required" && (
            <small className=" text-red-500 mt-1 self-end label-text-alt ">
              Guests is required
            </small>
          )}
        </div> */}

        <div className="flex flex-row space-x-16 mb-16">
          <button
            onClick={handleBack}
            className="relative mx-1 group rounded-lg w-full z-10 mt-5"
          >
            <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
              <div className=" duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
                <span className=" group-hover:translate-x-[-20px] transition-all">
                  <TbArrowBigLeftLine />
                </span>
                <span className="p-1">Previous</span>
              </div>
            </div>
          </button>
          <button
            onClick={handleNext}
            className="relative mx-1 group rounded-lg w-full z-10 mt-5"
          >
            <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
              <div className=" duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
                <span className="p-1">Next</span>
                <span className=" group-hover:translate-x-5 transition-all">
                  <TbArrowBigRightLine />
                </span>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Guest;
