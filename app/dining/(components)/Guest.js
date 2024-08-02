"use client";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

export const guests = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "More",
];
const Guest = ({ handleNext, handleBack }) => {
  const { setValue, watch } = useFormContext();

  const gest = watch();
  const [activeIndex, setActiveIndex] = useState(gest?.gests || null);

  const handleValue = (number) => {
    setActiveIndex(number);
    setValue("gests", number);
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-10">How many guests ? </h1>
      <div>
        <div className="grid gap-5 grid-cols-8 py-10">
          {guests.map((number, i) => (
            <button
              key={i}
              onClick={() => handleValue(number)}
              className={`btn btn-circle  btn-lg ${
                activeIndex === guests[i]
                  ? "btn-neutral  text-white"
                  : "btn-outline"
              }`}
              name="gests"
              value={number}
            >
              {number}
            </button>
          ))}
        </div>
        <div className="flex flex-row space-x-16 mb-16">
          <button
            onClick={handleBack}
            className="relative  mx-1 group rounded-lg w-full z-10 mt-5"
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
            disabled={!gest?.gests}
            className="relative disabled:opacity-20 disabled:cursor-not-allowed mx-1 group rounded-lg w-full z-10 mt-5"
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
      </div>
    </section>
  );
};

export default Guest;
