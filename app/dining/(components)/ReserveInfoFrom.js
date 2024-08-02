"use client";
import React from "react";
import { useFormContext } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input/react-hook-form";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";

const ReserveInfoFrom = ({ handleBack }) => {
  const {
    register: tableReservation,
    watch,
    control,
    formState: { errors },
  } = useFormContext();

  const { newsLetter, terms } = watch();
  // const d = watch();
  // console.log(d);

  return (
    <section>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 space-x-8">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Full name</span>
          </div>
          <input
            type="text"
            {...tableReservation("fullName", {
              required: true,
            })}
            placeholder="Type full name here"
            className="input input-bordered w-full max-w-md focus:border-none"
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-2">Type full name here</p>
          )}
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Contact Number</span>
          </div>

          <PhoneInput
            placeholder="+123 467890"
            defaultCountry="BD"
            className="input input-bordered w-full max-w-md focus:border-none"
            control={control}
            rules={{ required: true }}
            name="phoneNumber"
          />
          {errors.phoneNumber && (
            <p className="text-xs text-red-500 mt-2">
              Provide your contact number
            </p>
          )}
        </label>
      </div>
      <div className="mt-5">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            {...tableReservation("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="Type your email address"
            className="input input-bordered w-full focus:border-none"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-2">
              Provide valid email address
            </p>
          )}
        </label>
      </div>
      <div className=" mt-5">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Comments</span>
          </div>
          <textarea
            type="text"
            {...tableReservation("comments", {})}
            placeholder="Type your email address"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
        </label>
      </div>
      <div className=" mt-5">
        <label className="form-control flex-row w-full space-x-5">
          <input
            type="checkbox"
            {...tableReservation("terms", {
              required: true,
            })}
            className="checkbox checkbox-md checkbox-success"
          />
          <span className="label-text">
            I agree that the booking can be cancelled up to 6 hours before the
            reservation
          </span>
        </label>
      </div>
      <div className=" mt-5">
        <label className="form-control flex-row w-full space-x-5">
          <input
            type="checkbox"
            {...tableReservation("newsLetter", {
              required: true,
            })}
            className="checkbox checkbox-md checkbox-success"
          />
          <span className="label-text">
            Receive emails with offers and news from{" "}
            <span className="font-bold text-primary">Manisha Restaurant</span>
          </span>
        </label>
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
          type="submit"
          className="relative mx-1 disabled:opacity-20 disabled:cursor-not-allowed group rounded-lg w-full z-10 mt-5"
          disabled={!terms || !newsLetter}
        >
          <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
            <div className=" duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
              <span className="p-1">Book now</span>
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

export default ReserveInfoFrom;
