import Link from "next/link";
import React from "react";
import { TbArrowBigRightLine } from "react-icons/tb";

const CartCalculate = () => {
  return (
    <div className="w-fit basis-1/3  mt-16">
      <div className="card bg-slate-100 shadow-xl h-full max-h-[600px]">
        <div className="card-body">
          <div className=" flex justify-between text-2xl text-primary">
            <h1>Subtotal</h1>
            <h1>85544.00</h1>
          </div>
          <div className="divider divider-primary opacity-25 m-0"></div>
          <h2 className="card-title">Shipping</h2>
          <div className=" flex flex-row items-center">
            <label className="label flex-1 cursor-pointer justify-start space-x-4">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500 flex-none"
              />
              <p className="">
                Flat Rate <span className="opacity-50">(Incl. VAT)</span>{" "}
              </p>
            </label>
            <p className=" flex-none text-red-500"> 5877.00</p>
          </div>
          <div className=" flex flex-row items-center">
            <label className="label flex-1 cursor-pointer justify-start space-x-4">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500 flex-none"
              />
              <p className="">
                Local Pickup <span className="opacity-50">(Incl. VAT)</span>{" "}
              </p>
            </label>
            <p className=" flex-none text-red-500"> 5877.00</p>
          </div>
          <div className=" flex flex-row items-center">
            <label className="label flex-1 cursor-pointer justify-start space-x-4">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500 flex-none"
              />
              <p className="">Free Shipping</p>
            </label>
          </div>
          <div className=" join">
            {/* <label className="label">Apply Coupon Code </label> */}
            <input
              type="text"
              placeholder="Type your coupon code here"
              className="input input-bordered w-full max-w-xs join-item"
            />
            <button className="btn text-white uppercase join-item bg-green-600 flex-1">
              Apply
            </button>
          </div>
          <div className="divider divider-primary opacity-25 m-0"></div>
          <div className=" flex justify-between text-2xl text-primary">
            <h1>Grand Total</h1>
            <h1>85544.00</h1>
          </div>
        </div>
      </div>
      <div className="relative mx-1 group rounded-lg w-full z-10 mt-5">
        <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
          <Link
            href="/restaurant"
            className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
          >
            <span className="p-1">Proceed to Checkout</span>
            <span className=" group-hover:translate-x-5 transition-all">
              <TbArrowBigRightLine />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCalculate;
