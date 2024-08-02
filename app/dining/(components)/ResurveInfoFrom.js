"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const ResurveInfoFrom = () => {
  const [number, setNumber] = useState(null);
  const {
    register: tableReservation,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const handleNumber = () => {
    setValue("phoneNumber", number);
  };
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 space-x-8">
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
            onChange={setNumber}
            className="input input-bordered w-full max-w-md focus:border-none"
            name="phoneNumber"
          />
          {errors.phoneNumber && (
            <p className="text-xs text-red-500 mt-2">
              Provide your contact number
            </p>
          )}
        </label>
      </div>
      <div className=" ">
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
    </div>
  );
};

export default ResurveInfoFrom;
