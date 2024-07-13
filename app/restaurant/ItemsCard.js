"use client";
import SingleListCard from "./SingleListCard";
import foodMenu from "./FoodMenu";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "../Utils/CostomsTost";

const ItemsCard = () => {
  const [foodItems, setFoodItems] = useState(foodMenu);
  const [activeIndex, setActiveIndex] = useState(null);
  const cartError = useSelector((state) => state?.cartItem?.error);
  const handleCatagoriesItems = (id, index) => {
    const foodCatagories = foodMenu.filter((fooItems) => fooItems.id === id);
    setFoodItems(foodCatagories);
    setActiveIndex(index);
  };
  const handelAllitems = () => {
    setFoodItems(foodMenu);
    setActiveIndex(null);
  };
  useEffect(() => {
    if (cartError) {
      Toast.fire({
        icon: "error",
        title: `${cartError}`,
      });
    }
  }, [cartError]);
  return (
    <div id="menu-items" className="max-w-screen-2xl mx-auto pt-16">
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
