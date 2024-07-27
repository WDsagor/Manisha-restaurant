"use client";
import react, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

const TimeSlots = ({ handleNext, handleBack }) => {
  const { register: tableReserved } = useFormContext();
  const times = [
    {
      name: "Lunch",
      slots: [
        "11:15 AM",
        "11:30 AM",
        "11:45 AM",
        "12:00 PM",
        "12:15 PM",
        "12:30 PM",
        "12:45 PM",
        "1:00 PM",
        "1:15 PM",
        "1:30 PM",
        "1:45 PM",
        "2:00 PM",
        "2:15 PM",
        "2:30 PM",
      ],
    },
    {
      name: "Dinar",
      slots: [
        "08:00 PM",
        "08:30 PM",
        "09:00 AM",
        "09:30 PM",
        "10:00 PM",
        "10:30 PM",
        "11:00 PM",
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = useState(times[1].slots[0]);
  return (
    <section>
      <h1 className="text-3xl text-center mt-10">
        Select your time from available times
      </h1>
      <div>
        <div className="grid gap-5 grid-cols-5 py-10">
          {times[0].slots.map((slot, i) => {
            return (
              <button
                {...tableReserved("time", {
                  require: true,
                })}
                value={slot}
                onClick={(i) => setActiveIndex(slot)}
                key={i}
                className={`btn btn-circle font-normal p-2  btn-lg ${
                  activeIndex === times[1].slots[i]
                    ? "btn-neutral  text-white"
                    : "btn-outline"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>

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
      </div>
    </section>
  );
};

export default TimeSlots;
