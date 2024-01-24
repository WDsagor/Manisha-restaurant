import { Yesteryear } from "next/font/google";
import React from "react";
import { BsCurrencyPound } from "react-icons/bs";
import Button from "./Button";

const GreatVibes = Yesteryear({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const OfferArea = () => {
  return (
    <section className="">
      <div className=" grid lg:grid-cols-2">
        <div className="group overflow-hidden relative cursor-pointer">
          <div
            className="text-4xl h-[800px] group-hover:scale-150 duration-700 transition-all"
            style={{
              background: `url("/images/1 (1).jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className=" absolute top-0 z-50 text-left w-full p-10">
            <h1 className="text-3xl py-2 font-bold uppercase text-yellow-400">
              Limited time only
            </h1>
            <h1 className="text-6xl font-bold leading-tight uppercase text-primary">
              Sweet Chilli King <br />
              Prawns (NEW)
            </h1>
            <p className="text-primary max-w-md text-xl py-3">
              Old Delhi street stall style prawns in a sauce of chilli and
              garlic, served with peppers and spring onions
            </p>
            <p className="text-primary max-w-md text-4xl py-3 flex uppercase items-end">
              Only{" "}
              <span className="flex items-center text-6xl text-yellow-300">
                <BsCurrencyPound />
                6.95
              </span>
            </p>
            <Button />
          </div>
        </div>
        <div className="grid grid-flow-row grid-col-2">
          <div className="group overflow-hidden relative">
            <div
              className="text-4xl h-[400px] group-hover:scale-150 duration-700 transition-all"
              style={{
                background: `url("/images/1 (1).jpeg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className=" absolute top-0 z-50 text-center w-full p-10">
              <h1 className="text-2xl py-2 font-bold uppercase text-yellow-400">
                Limited time only
              </h1>
              <h1 className="text-4xl font-bold leading-tight uppercase text-primary">
                Soft Shell Crab (NEW)
              </h1>
              <p className="text-primary  text-xl py-3">
                Cooked with exotic spices, and served crispy
              </p>
              <p className="text-primary text-center text-xl py-3 uppercase items-end">
                <span className="flex mb-3 justify-center items-center text-4xl text-yellow-300">
                  <BsCurrencyPound />
                  6.50
                </span>
                USE CODE: SPECIAL3
              </p>
            </div>
          </div>
          <div className="group overflow-hidden relative">
            <div
              className="text-4xl  h-[400px] group-hover:scale-150 duration-700 transition-all"
              style={{
                background: `url("/images/1 (4).jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className=" absolute top-0 text-left w-full p-10">
              <h1 className="text-2xl py-2 font-bold uppercase text-yellow-400">
                Limited time only
              </h1>
              <h1 className="text-4xl font-bold leading-tight uppercase text-primary">
                Traditional Main Courses
              </h1>
              <p className="text-primary max-w-md text-xl py-3">
                Old Delhi street stall style prawns in a sauce of chilli and
                garlic, served with peppers and spring onions
              </p>
              <p className="text-primary max-w-md text-2xl py-3 uppercase items-end">
                Starting at
                <span className="flex items-center text-4xl text-yellow-300">
                  <BsCurrencyPound />
                  6.95
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferArea;
