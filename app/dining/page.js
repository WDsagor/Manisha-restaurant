"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import TypeOfFood from "./(components)/TypeOfFood";
import Guest from "./(components)/Guest";
import { FaCircleCheck } from "react-icons/fa6";
import Calender from "./(components)/Calender";
import TimeSlots from "./(components)/TimeSlots";
import ConfirmFrom from "./(components)/ConfirmFrom";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import Image from "next/image";

const page = () => {
  const methods = useForm();
  // const formArray = [1, 2, 3, 4, 5];
  const reserveName = ["Type", "Guests", "Date", "Time", "Confirm"];
  const [formNo, setFromNo] = useState(reserveName[0]);
  // console.log(formNo);

  const handleNext = () => {
    if (formNo === "Type") {
      setFromNo(reserveName[1]);
    } else if (formNo === "Guests") {
      setFromNo(reserveName[2]);
    } else if (formNo === "Date") {
      setFromNo(reserveName[3]);
    } else if (formNo === "Time") {
      setFromNo(reserveName[4]);
    } else {
      setFromNo(reserveName[0]);
    }
  };
  const handleBack = () => {
    if (formNo === "Guests") {
      setFromNo(reserveName[0]);
    } else if (formNo === "Date") {
      setFromNo(reserveName[1]);
    } else if (formNo === "Time") {
      setFromNo(reserveName[2]);
    } else if (formNo === "Confirm") {
      setFromNo(reserveName[3]);
    } else {
      setFromNo(reserveName[4]);
    }
  };
  const submitReservation = (data) => {
    // console.log(data);
  };
  return (
    <section className="max-w-screen-2xl  min-h-screen mx-auto grid lg:grid-cols-2 gap-10 mb-10 ">
      <div className="mt-32 ">
        <Image
          height={800}
          width={900}
          src={"/images/restaurant-tables.jpg"}
          alt="Monisha resturant"
          className="rounded-xl shadow-xl"
        />
      </div>
      <section className="mt-24 px-2 max-w-screen-md mx-auto">
        <h1 className="text-center text-5xl mb-2">Table Reservation</h1>
        <p className="text-center mb-10 font-normal">
          Please fill up the form below , with All your information, like Your
          Name , phone number etc and submit it for reserve a table at our
          Restaurant. We will get your mail and response accordingly. Some body
          from our organization will contact you. Thanks and visit again.
        </p>

        <div className="flex relative justify-between items-center flex-row mb-20">
          {reserveName.map((n, i) => {
            return (
              <div className=" relative w-full text-center" key={i}>
                {i !== reserveName.length - 1 && (
                  <div
                    className={`${
                      formNo === reserveName[i] ||
                      formNo === reserveName[i + 1] ||
                      formNo === reserveName[i + 2] ||
                      formNo === reserveName[i + 3] ||
                      formNo === reserveName[i + 4] ||
                      formNo === reserveName.length
                        ? "bg-neutral"
                        : "bg-primary"
                    } h-1 w-full z-[-100] absolute top-[50%]  `}
                  ></div>
                )}
                <div
                  className={`bg-white ${
                    formNo === reserveName[i] ||
                    formNo === reserveName[i + 1] ||
                    formNo === reserveName[i + 2] ||
                    formNo === reserveName[i + 3] ||
                    formNo === reserveName[i + 4] ||
                    formNo === reserveName.length
                      ? "flex transition-all duration-200"
                      : "hidden"
                  }  rounded-full relative  justify-center items-center h-12 w-12`}
                >
                  <FaCircleCheck size={50} color="green" />
                </div>
                <div
                  className={` w-12 ${
                    formNo === reserveName[i] ||
                    formNo === reserveName[i + 1] ||
                    formNo === reserveName[i + 2] ||
                    formNo === reserveName[i + 3] ||
                    formNo === reserveName[i + 4] ||
                    formNo === reserveName.length
                      ? "hidden"
                      : "flex transition-all duration-200"
                  } z-10 h-12 bg-primary rounded-full justify-center items-center text-white`}
                >
                  {i + 1}
                </div>
                <p
                  className={` ${
                    formNo === reserveName[i] ||
                    formNo === reserveName[i + 1] ||
                    formNo === reserveName[i + 2] ||
                    formNo === reserveName[i + 3] ||
                    formNo === reserveName[i + 4] ||
                    formNo === reserveName.length
                      ? "text-neutral font-medium"
                      : " opacity-50 "
                  } text-center absolute font-normal justify-center items-center`}
                >
                  {n}
                </p>
              </div>
            );
          })}
        </div>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitReservation)}>
            {formNo === "Type" && <TypeOfFood handleNext={handleNext} />}
            {formNo === "Guests" && (
              <Guest handleNext={handleNext} handleBack={handleBack} />
            )}
            {formNo === "Date" && (
              <Calender handleNext={handleNext} handleBack={handleBack} />
            )}
            {formNo === "Time" && (
              <TimeSlots handleNext={handleNext} handleBack={handleBack} />
            )}
            {formNo === "Confirm" && <ConfirmFrom handleBack={handleBack} />}
          </form>
        </FormProvider>
      </section>
    </section>
  );
};

export default page;
