import React from "react";
import TestOfIndia from "./TestOfIndia";
import GreatDining from "./GreatDining";
import InidanMenu from "./InidanMenu";
import IndianDishes from "./IndianDishes";
import ItemsCard from "./ItemsCard";
export const metadata = {
  title: "Restaurant - Manisha",
  description: "Manisha is Indian Restaurant",
};
const restaurant = () => {
  return (
    <div>
      <TestOfIndia />
      <GreatDining />
      <InidanMenu />
      <IndianDishes />
      <ItemsCard />
    </div>
  );
};

export default restaurant;
