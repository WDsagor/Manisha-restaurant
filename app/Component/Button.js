import React from "react";

const Button = ({ value }) => {
  return (
    <button className=" rounded-md btn-primary bg-transparent font-semibold uppercase btn transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-primary before:transition-transform before:duration-300 before:content-[''] before:rounded-md before:hover:scale-x-100 text-white">
      {value}
    </button>
  );
};

export default Button;
