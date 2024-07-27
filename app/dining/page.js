"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TypeOfFood from "./(components)/TypeOfFood";
import Guest from "./(components)/Guest";
import { FaCircleCheck } from "react-icons/fa6";
import Calender from "./(components)/Calender";
import TimeSlots from "./(components)/TimeSlots";
import ConfirmFrom from "./(components)/ConfirmFrom";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

const page = () => {
  const formArray = [1, 2, 3, 4, 5];
  const reserveName = ["Food Type", "Guests", "Date", "Time", "Confirm"];
  const [formNo, setFromNo] = useState(formArray[0]);
  // const {
  //   register: tableReserved,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: { errors },
  // } = useForm({ mode: "onTouched" });
  const methods = useForm();

  const handleNext = () => {
    setFromNo(formNo + 1);
  };
  const handleBack = () => {
    if (formArray.length === formNo) {
      setFromNo(formArray[3]);
      return;
    }
    setFromNo(formNo - 1);
  };
  const submitReservation = (data) => {
    console.log(data);
  };
  return (
    <section className="mt-24 px-2 max-w-screen-md mx-auto">
      <h1 className="text-center text-5xl mb-2">Table Reservation</h1>
      <p className="text-center mb-10 font-normal">
        Please fill up the form below , with All your information, like Your
        Name , phone number etc and submit it for reserve a table at our
        Restaurant. We will get your mail and response accordingly. Some body
        from our organization will contact you. Thanks and visit again.
      </p>

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
                      ? "text-neutral font-medium"
                      : ""
                  } text-center absolute font-normal justify-center items-center`}
                >
                  {reserveName[i]}
                </p>
              </div>
            </>
          );
        })}
      </div>
      <FormProvider {...methods}>
        <from onSubmit={methods.handleSubmit(submitReservation)}>
          {formNo === 1 && <TypeOfFood handleNext={handleNext} />}
          {formNo === 2 && (
            <Guest handleNext={handleNext} handleBack={handleBack} />
          )}
          {formNo === 3 && (
            <Calender handleNext={handleNext} handleBack={handleBack} />
          )}
          {formNo === 4 && (
            <TimeSlots handleNext={handleNext} handleBack={handleBack} />
          )}
          {formNo === 5 && <ConfirmFrom />}
          {formNo === 5 && (
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
                type="submit"
                className="relative mx-1 group rounded-lg w-full z-10 mt-5"
              >
                <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
                  <div className=" duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
                    <span className="p-1">submit</span>
                    <span className=" group-hover:translate-x-5 transition-all">
                      <TbArrowBigRightLine />
                    </span>
                  </div>
                </div>
              </button>
            </div>
          )}
        </from>
      </FormProvider>
    </section>
  );
};

export default page;
