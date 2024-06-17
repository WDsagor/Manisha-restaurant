"use client";
import SingleListCard from "./SingleListCard";
import foodMenu from "./FoodMenu";
import { useState } from "react";

const ItemsCard = () => {
  const [foodItems, setFoodItems] = useState(foodMenu);
  const [activeIndex, setActiveIndex] = useState(null);
  const handleCatagoriesItems = (id, index) => {
    const foodCatagories = foodMenu.filter((fooItems) => fooItems.id === id);
    setFoodItems(foodCatagories);
    setActiveIndex(index);
  };
  const handelAllitems = () => {
    setFoodItems(foodMenu);
    setActiveIndex(null);
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className=" text-center py-10">
        <h1 className="text-5xl text-primary font-bold">Our Menu</h1>
      </div>
      <div className="grid px-2 grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 max-w-screen-md mx-auto">
        <button
          onClick={handelAllitems}
          className={`btn ${
            activeIndex === null ? "btn-primary" : "btn-outline"
          }  uppercase btn-primary`}
        >
          All Menus
        </button>
        {foodMenu.map((fooditem, index) => {
          return (
            <button
              className={`btn ${
                index === activeIndex ? "btn-primary" : "btn-outline"
              } uppercase  btn-primary`}
              key={fooditem?.id}
              fooditem={fooditem}
              onClick={() => handleCatagoriesItems(fooditem?.id, index)}
            >
              {fooditem?.catagoryName}
            </button>
          );
        })}
      </div>
      <div>
        {foodItems.map((item) => {
          return <SingleListCard key={item?.id} fooditem={item} />;
        })}
      </div>
    </div>
  );
};

export default ItemsCard;
