import {
  addQuantity,
  decreaseQuantity,
  handleInputQuantity,
  removeItem,
} from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";
// import { useSelector } from "react-redux";
import { FiMinusCircle } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";

import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

const SingleItem = ({ foodItems }) => {
  const dispatch = useDispatch();
  const handleIncrement = (id, name) => {
    dispatch(addQuantity({ id, name }));
  };
  const handleDecrease = (id, name) => {
    dispatch(decreaseQuantity({ id, name }));
  };
  const handleInput = (id, name, value) => {
    dispatch(handleInputQuantity({ id, name, value }));
  };
  const handleRemove = (id, name) => {
    dispatch(removeItem({ id, name }));
  };
  return (
    <div className=" p-5 rounded-3xl flex flex-col space-y-5 basis-3/4">
      <h1 className="text-4xl text-center">
        {" "}
        You added total{" "}
        <span className="text-primary">{foodItems?.length}</span> items
      </h1>
      <div className="shadow-2xl rounded-lg p-3 bg-white flex justify-between flex-row space-x-10 items-center max-w-4xl ">
        <h1> Food Images</h1>
        <h1 className=" flex-1 px-5"> Food Items Name</h1>
        <h1 className=" flex-none px-5"> Unit price</h1>
        <h1 className="basis-2/12 pl-6"> Quantity</h1>
        <h1> Price</h1>
        <h1> Actions</h1>
      </div>
      {foodItems?.map((item) => {
        return (
          <section className=" shadow-2xl rounded-lg p-3 bg-white flex justify-between flex-row space-x-10 items-center max-w-4xl ">
            <div className="flex flex-1 justify-start space-x-5 flex-row items-center">
              <Image
                className=" rounded-lg"
                src={item.imgUrl}
                height={70}
                width={70}
                alt={item.name}
              />
              <h1 className="text-xl">{item.name}</h1>
            </div>
            <h1 className="text-lg flex-none">{item.price} £</h1>

            <div className="join flex-none ">
              <button
                onClick={() => handleDecrease(item.id, item.name)}
                className="btn  btn-primary btn-outline join-item btn-sm"
                disabled={item.quantity === 1}
              >
                <FiMinusCircle size={25} />
              </button>
              <input
                onChange={(e) =>
                  handleInput(item.id, item.name, e.target.value)
                }
                className="input input-primary input-sm join-item w-12 max-w-28"
                placeholder="Quantity"
                value={item?.quantity}
              />
              <button
                onClick={() => handleIncrement(item.id, item.name)}
                className="btn btn-sm btn-primary join-item btn-outline"
              >
                <IoAddCircleOutline size={25} />
              </button>
            </div>
            <p className=" text-center">
              Total Price <br className=" text-xl font-bold" />{" "}
              {(item.price * item?.quantity).toFixed(2)} £{" "}
            </p>
            <button
              onClick={() => handleRemove(item.id, item.name)}
              className="hover:border-none transition-all btn btn-circle btn-outline btn-sm text-red-400 hover:bg-red-400"
            >
              <MdDelete size={25} />
            </button>
          </section>
        );
      })}
    </div>
  );
};

export default SingleItem;
