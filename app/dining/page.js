"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import TypeOfFood from "./(components)/TypeOfFood";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import Guest from "./(components)/Guest";
import { FaCircleCheck } from "react-icons/fa6";

const page = () => {
  const formArray = [1, 2, 3, 4, 5];
  const reserveName = ["Food Type", "Guests", "Date", "Time", "Confirm"];
  const [formNo, setFromNo] = useState(formArray[0]);
  const {
    register: tableReserved,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const handleNext = () => {
    setFromNo(formNo + 1);
  };
  const handleBack = () => {
    setFromNo(formNo - 1);
  };
  return (
    <div className="mt-24 px-2 max-w-screen-md mx-auto">
      <h1 className="text-center text-5xl mb-10">Table Reservation</h1>

      <div className="flex relative justify-between items-center flex-row mb-20">
        {formArray.map((n, i) => {
          return (
            <>
              <div className=" relative w-full text-center">
                {i !== formArray.length - 1 && (
                  <div
                    className={`${
                      formNo === formArray[i] ||
                      formNo === formArray[i + 1] ||
                      formNo === formArray[i + 2] ||
                      formNo === formArray[i + 3] ||
                      formNo === formArray.length
                        ? "bg-neutral"
                        : "bg-primary"
                    } h-1 w-full z-[-100] absolute top-[50%]  `}
                  ></div>
                )}
                <div
                  key={i}
                  className={`bg-white ${
                    formNo === formArray[i] ||
                    formNo === formArray[i + 1] ||
                    formNo === formArray[i + 2] ||
                    formNo === formArray[i + 3] ||
                    formNo === formArray.length
                      ? "flex transition-all duration-200"
                      : "hidden"
                  }  rounded-full relative  justify-center items-center h-12 w-12`}
                >
                  <FaCircleCheck size={50} color="green" />
                </div>
                <div
                  key={i}
                  className={` w-12 ${
                    formNo === formArray[i] ||
                    formNo === formArray[i + 1] ||
                    formNo === formArray[i + 2] ||
                    formNo === formArray[i + 3] ||
                    formNo === formArray.length
                      ? "hidden"
                      : "flex transition-all duration-200"
                  } z-10 h-12 bg-primary rounded-full justify-center items-center text-white`}
                >
                  {n}
                </div>
                <p
                  className={` ${
                    formNo === formArray[i] ||
                    formNo === formArray[i + 1] ||
                    formNo === formArray[i + 2] ||
                    formNo === formArray[i + 3] ||
                    formNo === formArray.length
                      ? "text-neutral"
                      : ""
                  } text-center absolute justify-center items-center`}
                >
                  {reserveName[i]}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <from>
        {formNo === 1 && (
          <TypeOfFood handleNext={handleNext} tableReserved={tableReserved} />
        )}
        {formNo === 3 && (
          <TypeOfFood handleNext={handleNext} tableReserved={tableReserved} />
        )}
        {formNo === 2 && (
          <Guest
            handleNext={handleNext}
            handleBack={handleBack}
            tableReserved={tableReserved}
            errors={errors}
          />
        )}
        {formNo === 4 && (
          <Guest
            handleNext={handleNext}
            handleBack={handleBack}
            tableReserved={tableReserved}
            errors={errors}
          />
        )}
      </from>
    </div>
  );
};

export default page;
