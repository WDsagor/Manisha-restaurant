import React from "react";
import TestOfIndia from "./TestOfIndia";
import GreatDining from "./GreatDining";
import InidanMenu from "./InidanMenu";
import IndianDishes from "./IndianDishes";
import ItemsCard from "./ItemsCard";

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
