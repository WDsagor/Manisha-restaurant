"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/features/cart/cartSlice";
import Swal from "sweetalert2";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const CheckoutItems = () => {
  const checkoutItems = useSelector((state) => state.cartItem.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (id, name) => {
    Swal.fire({
      title: `Are you remove? ${name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Removed!",
          icon: "success",
        });
        dispatch(removeItem({ id, name }));
      }
    });
  };

  return (
    <div className="px-2 rounded-3xl flex flex-col space-y-5 w-full basis-2/3">
      <h1 className="text-4xl text-center">
        {" "}
        You added total{" "}
        <span className="text-primary">{checkoutItems?.length}</span> items
      </h1>
      <div className="shadow-2xl rounded-lg p-3 bg-green-700 text-white flex justify-between flex-row space-x-11 items-center">
        <h1 className=" flex-1">Food Items Name</h1>

        <h1 className=""> Quantity</h1>
        <h1> Total Price</h1>
        <h1> Actions</h1>
      </div>
      {checkoutItems?.map((item) => {
        return (
          <section
            key={item.id}
            className=" relative gap-5 border-b p-3  flex flex-col justify-between md:flex-row space-x-10 items-start md:items-center "
          >
            <h1 className="text-xl flex-1">{item.name}</h1>

            <h1 className="text-lg">{item.quantity} pcs</h1>

            <p className="">{(item.price * item?.quantity).toFixed(2)} £ </p>
            <button
              onClick={() => handleRemove(item.id, item.name)}
              className=" transition-all  btn btn-ghost text-red-600 btn-sm absolute md:static top-2 right-2"
            >
              <IoMdClose size={25} />
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default CheckoutItems;
