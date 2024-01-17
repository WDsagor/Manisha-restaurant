import { Great_Vibes, Yesteryear } from "next/font/google";
import React from "react";

const GreatVibes = Yesteryear({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const OfferArea = () => {
  return (
    <section className="">
      <div className="container max-w-screen-2xl mx-auto">
        <p className="flex font-bold justify-center items-center py-10 text-3xl">
          <span className={`${GreatVibes.className} mr-4 text-green-600`}>
            Indian food{" "}
          </span>
          GET <span className="text-red-600 mx-3"> $5 OFF </span> JOIN INDIAN
          FOOD REWARDS
          <butto className=" mx-3 btn btn-outline text-3xl bg-transparent hover:bg-red-600 hover:text-white">
            CREATE AN ACCOUNT
          </butto>
          OR{" "}
          <span className=" text-green-600 mx-2 underline hover:no-underline transition-all cursor-pointer">
            SIGN IN
          </span>
        </p>
      </div>
      <div className=" grid grid-cols-2 overflow-hidden">
        <div
          className="text-4xl h-96 hover:scale-150 duration-500 transition-all"
          style={{
            background: `url("/images/Home-bg-1280x1072-2880w.png")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div>
          <h1 className="text-6xl uppercase text-white">Tandoori Chicken</h1>
        </div>
        <div className="text-4xl">two</div>
      </div>
    </section>
  );
};

export default OfferArea;
