"use client";

import React, { useEffect } from "react";

const CercleLogo = () => {
  useEffect(() => {
    let text1 = document.querySelector(".text p");

    text1.innerHTML = text1?.innerText
      .split("")
      .map(
        (char, i) =>
          `<span style="transform:rotate(${i * 5}deg)" >${char}</span>`
      )
      .join("");
  }, []);
  return (
    <div className="border-[3px] border-red-600 relative w-[185px] h-[185px] rounded-[50%] flex justify-center items-center">
      <div
        style={{
          background: `url("/images/logo.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
        className=" absolute w-[130px] h-[130px] rounded-[50%]"
      ></div>
      <div className=" absolute w-full h-full text font-normal uppercase text-xs">
        <p>Indian Food - House Specials - Indian Food - Masnisha Resturant</p>
      </div>
    </div>
  );
};

export default CercleLogo;
