import React from "react";
import { TbArrowBigRightLine } from "react-icons/tb";

const GreatDining = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto text-center py-20">
      <div className=" max-w-5xl mx-auto">
        <h1 className="mb-5 uppercase text-5xl font-bold leading-snug text-primary">
          A modern <span> Indian restaurant</span> <br />
          for a great dining experience
        </h1>
        <p className="text-xl font-light pb-10">
          Do you want to dine at a restaurant that offers delicious Indian food
          and personalised services? At Manisha, we will ensure you have a
          quality dining experience every time you visit us. Our staff are
          friendly and polite. We will take care of all your needs and alter our
          recipe to suit individual taste preferences, especially for the little
          ones. Our menu is quite extensive and you will be spoilt for choice.
          You can indulge in the aromatic flavours of traditional biryanis and
          enjoy a fine entrée with a secret-recipe sauce. If you are in a hurry,
          take advantage of our takeaway service.
        </p>
        <div className="relative w-[135px] rounded-lg mx-auto">
          <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
            <button className=" py-2 duration-500 flex gap-1 px-3 justify-center items-center rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
              <span className="text-xl">Order now</span>
              <span>
                <TbArrowBigRightLine />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatDining;
