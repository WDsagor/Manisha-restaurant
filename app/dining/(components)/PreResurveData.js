"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const PreResurveData = () => {
  const { register: tableReservation, watch } = useFormContext();
  const { type, gests, reservationDate, reservationTime } = watch();
  return (
    <div className="w-full">
      <div className=" grid grid-cols-2 gap-y-5 gap-x-24">
        <p className="flex flex-col">
          <span className="font-normal text-sm opacity-60">Type</span>
          <span className="text-primary font-medium">{type}</span>
        </p>
        <p className="flex flex-col justify-center">
          <span className="font-normal text-sm opacity-60">
            Reservation Date
          </span>
          <span className="text-primary font-medium">{reservationDate}</span>
        </p>
        <p className="flex flex-col justify-center">
          <span className="font-normal text-sm opacity-60">
            Number of guests
          </span>
          <span className="text-primary font-medium">{gests} persons</span>
        </p>
        <p className="flex flex-col justify-center">
          <span className="font-normal text-sm opacity-60">
            Reservation Date
          </span>
          <span className="text-primary font-medium">{reservationTime}</span>
        </p>
      </div>
    </div>
  );
};

export default PreResurveData;
