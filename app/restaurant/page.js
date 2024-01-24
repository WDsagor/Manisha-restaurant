import Image from "next/image";
import React from "react";

const restaurant = () => {
  return (
    <div className="">
      <div
        className="hero"
        style={{
          backgroundImage: "url(/images/menu-image.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-40 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-primary mt-24">
              Our Menu
            </h1>
            <p className="text-accent text-2xl">Our all items availabel here</p>
          </div>
        </div>
      </div>
      <div className=" max-w-screen-md mx-auto py-10 flex flex-col gap-6">
        <div className="card card-side bg-base-100 shadow-xl  hover:scale-105 transition-all cursor-pointer">
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success">2.50</button>
            </div>
          </div>
          <figure className=" ">
            <Image
              height={100}
              width={100}
              src="/images/Stuffed-Paratha-(Mix Veg).jpg"
              alt="Movie"
            />
          </figure>
        </div>
        <div className="card card-side bg-base-100 shadow-xl hover:scale-105 transition-all cursor-pointer">
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success">2.50</button>
            </div>
          </div>
          <figure className="">
            <Image
              height={100}
              width={100}
              src="/images/Plain-Naan.jpg"
              alt="Movie"
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default restaurant;
