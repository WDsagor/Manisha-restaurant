import React from "react";

const loading = () => {
  return (
    <div className=" flex justify-center items-center min-h-screen w-full">
      <div className=" btn-lg text-neutral ">
        Loading..<span className=" btn bg-neutral loading-spinner"></span>
      </div>
    </div>
  );
};

export default loading;
