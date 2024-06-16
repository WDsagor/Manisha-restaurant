"use client"
import SingleListCard from "./SingleListCard";
import foodMenu from "./FoodMenu";
import { useState } from "react";

const ItemsCard = () => {
  const [foodItems, setFoodItems]= useState(foodMenu)
  const handleCatagoriesItems=(id)=>{
    const foodCatagories=foodMenu.filter(fooItems => fooItems.id===id)
    setFoodItems(foodCatagories);
    
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className=" text-center py-10">
        <h1 className="text-5xl text-primary font-bold">Our Menu</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 max-w-screen-md mx-auto">
        <button onClick={()=>setFoodItems(foodMenu)} className="btn btn-outline  btn-primary">All Menus</button>
        {foodMenu.map((fooditem) => {
        
          return (
            <>
            <button onClick={()=>handleCatagoriesItems(fooditem?.id)}
              className="btn btn-outline  btn-primary"
              key={fooditem?.id}
              fooditem={fooditem}
              >
              {fooditem?.catagoryName}
            </button>
              </>
          );
        })}
      </div>
      <div>
        {foodItems.map((fooditem) => {
          return <SingleListCard key={fooditem?.id} fooditem={fooditem} />;
        })}
      </div>
    </div>
  );
};

export default ItemsCard;
