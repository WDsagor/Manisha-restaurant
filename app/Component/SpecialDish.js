import React from "react";
import TandooriDishesSlider from "./TandooriDishesSlider";

const SpecialDish = () => {
  return (
    <section className=" bg-yellow-50">
      <div className="container max-w-screen-2xl mx-auto">
        <div className="w-full mx-auto text-center max-w-lg py-20 ">
          <h1 className="text-xl text-red-600 uppercase">
            Special Tandoori Dishes
          </h1>
          <h1 className="text-6xl font-bold uppercase leading-normal">
            FEAST YOUR EYES
          </h1>
          <p>
            You can find our whole menu on our website, filled with
            mouth-watering dishes and catering for all kinds of different
            tastes!
          </p>
        </div>
        <div className="w-full mx-auto">
          <TandooriDishesSlider />
        </div>
      </div>
    </section>
  );
};

export default SpecialDish;
