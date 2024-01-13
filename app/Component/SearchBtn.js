"use client";
import { IoSearch } from "react-icons/io5";

export const SearchBtn = () => {
  return (
    <span>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className=" flex justify-center items-center gap-1"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <span>
          <IoSearch />
        </span>
        Search
      </button>
      <dialog id="my_modal_3" className="modal modal-top">
        <div className="w-full max-w-screen-2xl mx-auto bg-slate-50">
          <form className=" min-w-full " method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full"
          />
        </div>
      </dialog>
    </span>
  );
};
