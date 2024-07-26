"use client";
import { TbArrowBigRightLine } from "react-icons/tb";

const TypeOfFood = ({ tableReserved, handleNext }) => {
  return (
    <div>
      <h1 className="text-3xl">Please select your food type</h1>
      <section>
        <div className="form-control">
          <label className="label justify-start space-x-3">
            <input
              {...tableReserved("foodType", {
                require: true,
              })}
              type="radio"
              className="radio checked:bg-orange-500"
              name="foodType"
            />
            <span className="text-lg">Lunch</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label justify-start space-x-3">
            <input
              {...tableReserved("foodType", {
                require: true,
              })}
              type="radio"
              className="radio checked:bg-orange-500"
              name="foodType"
            />
            <span className="text-lg ">Dinner</span>
          </label>
        </div>
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
      </section>
    </div>
  );
};

export default TypeOfFood;
