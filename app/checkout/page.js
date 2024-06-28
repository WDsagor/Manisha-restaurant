import React from "react";

import CheckoutItems from "./CheckoutItems";
import CartCalculate from "../cart/(components)/CartCalculate";

const page = () => {
  return (
    <div className=" my-24 max-w-screen-2xl mx-auto p-4">
      <div className="flex space-x-12">
        <CheckoutItems />
        <CartCalculate title="Pay Now" />
      </div>
    </div>
  );
};

export default page;
