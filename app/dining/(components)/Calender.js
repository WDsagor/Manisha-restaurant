"use client";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import "react-day-picker/style.css";
import { useFormContext } from "react-hook-form";
import { format } from "date-fns";

const Calender = ({ handleNext, handleBack }) => {
  const today = new Date();
  const [selected, setSelected] = useState(today);
  const { setValue, watch } = useFormContext();
  useEffect(() => {
    setValue("reservationDate", format(selected, "dd-MM-yyyy"));
  }, [selected]);

  const dateR = watch();
  console.log(dateR);

  return (
    <section>
      <DayPicker
        classNames={{
          today: `border-neutral`,
          selected: `bg-neutral text-white rounded-full`,
        }}
        mode="single"
        selected={selected}
        onSelect={setSelected}
        disabled={{ dayOfWeek: [0] }}
        numberOfMonths={2}
      />
      <div className="rounded-full flex flex-row space-x-16 mb-16">
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
  );
};

export default Calender;
