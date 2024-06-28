"use client";
import React from "react";
import SingleItem from "./(components)/SingleItem";
import { useSelector } from "react-redux";
import EmptyCart from "./(components)/EmptyCart";
import CartCalculate from "./(components)/CartCalculate";

const page = () => {
  const foodItems = useSelector((state) => state.cartItem.cartItems);
  return (
    <div className=" my-24 max-w-screen-2xl mx-auto p-4">
      {foodItems?.length ? (
        <div className="flex space-x-12">
          <SingleItem foodItems={foodItems} />
          <CartCalculate />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default page;
