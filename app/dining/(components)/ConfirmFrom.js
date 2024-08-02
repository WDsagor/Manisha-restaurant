import React from "react";
import { TbArrowBigLeftLine, TbArrowBigRightLine } from "react-icons/tb";
import PreReserveData from "./PreReserveData";
import ReserveInfoFrom from "./ReserveInfoFrom";
import { useFormContext } from "react-hook-form";

const ConfirmFrom = ({ handleBack }) => {
  const {
    register: tableReservation,
    watch,
    formState: { errors },
  } = useFormContext();
  const watchShowChild = watch("showChildren", false);
  // const name = watch();
  // console.log(name);

  return (
    <section className="mx-auto">
      <PreReserveData />
      <div>
        <div className="form-control">
          <label className="label justify-start space-x-3 mt-2">
            <input
              {...tableReservation("rullStol", {})}
              type="checkbox"
              className=" checkbox checkbox-md checkbox-secondary  checked:bg-orange-500"
              name="rullStol"
              value="Yes"
            />
            <span className="text-lg">Rullstol</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label justify-start space-x-3 mt-2">
            <input
              {...tableReservation("showChildren", {})}
              type="checkbox"
              className={`checkbox checkbox-md checkbox-secondary  checked:bg-orange-500`}
              name="showChildren"
            />
            <span className="text-lg">Have Children ?</span>
          </label>
          {watchShowChild && (
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">How many Children?</span>
              </div>
              <input
                type="number"
                placeholder="Type children number"
                {...tableReservation("children", { max: 10 })}
                className="input input-bordered w-full max-w-md"
              />
              {errors.children && (
                <p className="text-xs text-red-500 mt-2">
                  {"Maximum 10 Children allowed"}
                </p>
              )}
            </label>
          )}
        </div>
      </div>
      <ReserveInfoFrom handleBack={handleBack} />
    </section>
  );
};

export default ConfirmFrom;
