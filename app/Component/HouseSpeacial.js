import React from "react";
import CercleLogo from "./CercleLogo";

const HouseSpeacial = () => {
  return (
    <section className=" bg-orange-50">
      <div className=" container max-w-screen-2xl mx-auto">
        <div className="flex py-20 items-center">
          <div className="px-5 mr-16 lg:mr-[250px]">
            <h1 className="text-2xl uppercase font-bold text-red-600">
              EXPLORE THE NEW TASTE
            </h1>
            <h1 className="text-5xl uppercase font-bold">House Specials</h1>
          </div>
          <div>
            <CercleLogo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseSpeacial;
