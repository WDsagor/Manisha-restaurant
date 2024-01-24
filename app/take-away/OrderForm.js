"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { TbArrowBigRightLine } from "react-icons/tb";

const OrderForm = () => {
  const {
    register: confirmOrder,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const onSubmit = async (data) => {};
  return (
    <div
      className="h-screen w-full mx-auto"
      style={{
        background: `url("/images/Home-bg-1280x1072-2880w.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mx-auto font-normal flex justify-center items-center md:w-[500px] flex-col lg:flex-row-reverse text-primary">
        <div className="card flex-shrink-0 w-full max-w-xl shadow-lg bg-opacity-30 bg-black mt-28 shadow-slate-400">
          <div className="card-body transition-all">
            <h1 className="text-2xl font-bold text-center pb-7">
              Confirm your order
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex gap-5">
                <div className="form-control w-full">
                  <label className="label ">
                    <span className="label-text text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                      First Name
                    </span>
                  </label>
                  <input
                    {...confirmOrder("firstName", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Enter your frist name"
                    className="input input-bordered w-full"
                  />
                  {errors.firstName?.type === "required" && (
                    <small className=" text-[#FFF80A] mt-1 self-end label-text-alt ">
                      Frist name is required
                    </small>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label ">
                    <span className="label-text text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                      Last Name
                    </span>
                  </label>
                  <input
                    {...confirmOrder("lastName", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Enter your last name"
                    className="input input-bordered w-full"
                  />
                  {errors.lastName?.type === "required" && (
                    <small className=" text-[#FFF80A] mt-1 self-end label-text-alt ">
                      Last name is required
                    </small>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                    Email
                  </span>
                </label>
                <input
                  {...confirmOrder("email", {
                    required: true,
                    pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <small className=" text-[#FFF80A] mt-1 self-end label-text-alt">
                    Email is required
                  </small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className=" text-[#FFF80A] mt-1 self-end label-text-alt">
                    Your email is invalid
                  </small>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  text-white after:content-['*'] after:ml-0.5 after:text-[#FFF80A]">
                    Contact Number
                  </span>
                </label>
                <input
                  {...confirmOrder("number", {
                    required: true,
                    // pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  type="number"
                  placeholder="Enter your contact number"
                  className="input input-bordered"
                />
                {errors.number?.type === "required" && (
                  <small className=" text-[#FFF80A] mt-1 self-end label-text-alt">
                    Number is required
                  </small>
                )}
                {/* {errors.email?.type === "pattern" && (
                  <small className=" text-[#FFF80A] mt-1 self-end label-text-alt">
                    Your email is invalid
                  </small>
                )} */}
              </div>

              <div className="form-control mt-6 ">
                <div className=" group relative mx-auto  w-[120px] rounded-lg z-10">
                  {/* <Button value="Order now" /> */}
                  <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
                    <button className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 ">
                      <span className="text-xl">Confirm</span>
                      <span className=" group-hover:translate-x-2 duration-200 transition-all">
                        <TbArrowBigRightLine />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
