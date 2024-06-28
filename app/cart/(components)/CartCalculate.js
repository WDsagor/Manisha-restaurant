"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TbArrowBigRightLine } from "react-icons/tb";
import { useSelector } from "react-redux";

const CartCalculate = ({ title, link }) => {
  const [checkedValue, setCheckedValue] = useState(0);
  const allCartItems = useSelector((state) => state?.cartItem.cartItems);
  // console.log(allCartItems);
  const totalPrice = allCartItems.reduce((total, item) => {
    return (total = total + item.quantity * item.price);
  }, 0);
  const flatRate = 2.5;
  const localPickup = 1.5;
  const totalVat = parseFloat(totalPrice * 0.2).toFixed(2);
  const getCheckedValue = (value) => {
    setCheckedValue(value);
  };
  // console.log(checkedValue);
  const getGrandTotal = () => {
    return (
      parseFloat(totalPrice) + parseFloat(totalVat) + parseFloat(checkedValue)
    );
    // console.log(e);
  };

  return (
    <div className="w-fit basis-1/3  mt-16">
      <div className="card bg-slate-100 shadow-xl h-full max-h-[600px]">
        <div className="card-body">
          <div className=" flex justify-between text-2xl text-primary">
            <h1>Subtotal</h1>
            <h1>{totalPrice.toFixed(2)} £</h1>
          </div>
          <div className="divider divider-primary opacity-25 m-0"></div>
          <h2 className="card-title mt-5 pb-2">Shipping</h2>
          <div className=" flex flex-row items-center">
            <label className="label flex-1 cursor-pointer justify-start space-x-4">
              <input
                type="radio"
                name="shipping"
                className="radio checked:bg-blue-500 flex-none"
                value={2.5}
                checked={totalPrice >= 20}
                onChange={(e) => getCheckedValue(e.target.value)}
              />
              <p className="">
                Flat Rate <span className="opacity-50">(Incl. VAT)</span>{" "}
              </p>
            </label>
            <p className=" flex-none text-red-500"> {flatRate} £</p>
          </div>
          <div className=" flex flex-row items-center">
            <label className="label flex-1 cursor-pointer justify-start space-x-4">
              <input
                type="radio"
                name="shipping"
                value={1.5}
                onChange={(e) => getCheckedValue(e.target.value)}
                className="radio checked:bg-blue-500 flex-none"
                checked={totalPrice <= 19}
              />
              <p className="">
                Local Pickup <span className="opacity-50">(Incl. VAT)</span>{" "}
              </p>
            </label>
            <p className=" flex-none text-red-500"> {localPickup} £</p>
          </div>
          <div className=" flex flex-row items-center ">
            <label className="label flex-1 cursor-pointer justify-start space-x-4">
              <input
                type="radio"
                name="shipping"
                value={0}
                onChange={(e) => getCheckedValue(e.target.value)}
                className="radio checked:bg-blue-500 flex-none"
                checked={totalPrice >= 100}
              />
              <p className="">Free Shipping</p>
            </label>
          </div>
          <div className=" join py-5">
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
          <div className=" flex justify-between">
            <h1>VAT - 20%</h1>
            <h1 className="text-red-500">{totalVat} £</h1>
          </div>
          <div className="divider divider-primary opacity-25 m-0"></div>

          <div className=" flex justify-between text-2xl text-primary mt-10">
            <h1>Grand Total</h1>
            <h1>{getGrandTotal().toFixed(2)} £</h1>
          </div>
        </div>
      </div>
      <button className="relative mx-1 group rounded-lg w-full z-10 mt-5">
        <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
          {link ? (
            <Link
              href={`${link}`}
              className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
            >
              <span className="p-1">{title}</span>
              <span className=" group-hover:translate-x-5 transition-all">
                <TbArrowBigRightLine />
              </span>
            </Link>
          ) : (
            <div className=" duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
              <span className="p-1">{title}</span>
              <span className=" group-hover:translate-x-5 transition-all">
                <TbArrowBigRightLine />
              </span>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default CartCalculate;
