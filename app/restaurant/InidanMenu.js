import Image from "next/image";
import React from "react";

const InidanMenu = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          // backgroundImage: "url(/images/menu-image.png)",
          backgroundImage: "url(/images/Home-bg-1280x1072-2880w.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero text-primary py-20 px-2">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <Image
              height={400}
              width={500}
              src="/images/food1.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Our assorted Indian menu</h1>
              <p className="pt-6 text-2xl">
                The extensive menu at our restaurant includes:
              </p>
              <ul className=" list-disc ml-5 mt-4">
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  Starters and tandoori items
                </li>
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  Rice dishes, including biryanis
                </li>
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  Traditional main course dishes
                </li>
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  Vegetable side dishes
                </li>
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  Tandoori breads
                </li>
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  English dishes
                </li>
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  Unique Indian desserts
                </li>
                <li className=" cursor-pointer p-2 hover:bg-amber-900 hover:scale-105 hover:text-white transition-all hover:shadow-lg">
                  Chef's special dishes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InidanMenu;
