import React from "react";
import CercleLogo from "./CercleLogo";
import { BsCurrencyPound } from "react-icons/bs";

const HouseSpeacial = () => {
  const houseSpeacial = [
    {
      id: 1,
      name: "Lamb Shashlick",
      price: 5.6,
      discription: "Lamb with tomatoes, green pepper and onion cooked in the clay oven. Served with salad",
    },
    {
      id: 2,
      name: "Chicken Tikka",
      price: 4.5,
      discription: "Spring chicken on the bone, marinated and grilled in the tandoori oven. Served with salad",
    },
    {
      id: 3,
      name: "Lamb Tikka",
      price: 6.5,
      discription: "Spring chicken on the bone, marinated and grilled in the tandoori oven. Served with salad",
    },
    {
      id: 4,
      name: "Tandoori Chicken",
      price: 5.5,
      discription: "Chicken tikka, seekh kebab, lamb tikka, tandoori chicken, tandoori king prawn. Served with salad",
    },
  ];
  return (
    <section className=" bg-orange-50 py-20">
      <div className=" container max-w-screen-2xl mx-auto">
        <div className="flex justify-center items-center">
          <div className=" mb-10">
            <CercleLogo />
          </div>
        </div>
      </div>
      <div className=" grid lg:grid-cols-2 gap-20">
        <div
          className=" h-[500px] hidden md:block"
          style={{
            background: `url("/images/1 (2).jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className=" px-4 max-w-2xl">
          {houseSpeacial.map(({ id, name, discription, price }) => {
            return (
              <div key={id} className="flex justify-between ">
                <div className=" max-w-[200px] py-2">
                  <h1 className=" text-2xl font-bold">{name}</h1>
                  <p>{discription}</p>
                </div>
                <div className="w-full border-t-[3px] border-dashed mt-5 mr-2"></div>
                <p className="text-2xl font-bold pr-5">
                  <span className="flex items-center text-3xl text-red-600">
                    <BsCurrencyPound />

                    {price}
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseSpeacial;
