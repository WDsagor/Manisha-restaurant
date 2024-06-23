"use client";
import React from "react";
import SingleItem from "./(components)/SingleItem";
import { useSelector } from "react-redux";
import EmptyCart from "./(components)/EmptyCart";

const page = () => {
  const foodItems = useSelector((state) => state.cartItem.cartItems);
  return (
    <div className=" my-24 max-w-screen-2xl mx-auto">
      {foodItems?.length ? <SingleItem foodItems={foodItems} /> : <EmptyCart />}
    </div>
  );
};

export default page;
