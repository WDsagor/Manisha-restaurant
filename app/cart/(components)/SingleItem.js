import {
  addQuantity,
  decreaseQuantity,
  handleInputQuantity,
  removeAllItems,
  removeItem,
} from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMinusCircle } from "react-icons/hi2";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";
import { TbArrowBigLeftLine } from "react-icons/tb";
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
    console.log(value);
  };
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
  const removeAll = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't remove all items!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#008000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Removed!",
          text: "Your item has been remove.",
          icon: "success",
        });
        dispatch(removeAllItems());
      }
    });
  };
  return (
    <div className="px-2 rounded-3xl flex flex-col space-y-5 w-full basis-2/3">
      <h1 className="text-4xl text-center">
        {" "}
        You added total{" "}
        <span className="text-primary">{foodItems?.length}</span> items
      </h1>
      <div className="shadow-2xl rounded-lg p-3 bg-green-700 text-white flex justify-between flex-row space-x-11 items-center">
        <h1 className=" flex-1">Food Items Name</h1>
        <h1 className=" flex-none"> Unit price</h1>
        <h1 className="basis-2/12 pl-6"> Quantity</h1>
        <h1> Price</h1>
        <h1> Actions</h1>
      </div>
      {foodItems?.map((item) => {
        return (
          <section className=" relative shadow-2xl rounded-lg p-3 bg-white flex flex-col justify-between md:flex-row space-x-10 items-start md:items-center ">
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
            <h1 className="text-lg">{item.price} £</h1>

            <div className="join ">
              <button
                onClick={() => handleDecrease(item.id, item.name)}
                className="btn  btn-primary btn-outline join-item btn-sm"
                disabled={item.quantity === 1}
              >
                <HiOutlineMinusCircle size={25} />
              </button>
              <input
                onChange={(e) =>
                  handleInput(item.id, item.name, e.target.value)
                }
                className="input input-primary input-sm join-item w-12 max-w-28"
                placeholder="Quantity"
                value={item?.quantity}
                type="number"
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
              className="hover:border-none transition-all btn btn-circle btn-outline btn-sm text-red-400 hover:bg-red-400 absolute md:static top-2 right-2"
            >
              <MdDelete size={25} />
            </button>
          </section>
        );
      })}
      <section className=" flex justify-between max-w-4xl pt-10">
        <div className="relative mx-1 rounded-lg w-[150px]">
          <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
            <Link
              href="/restaurant"
              className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
            >
              <span>
                <TbArrowBigLeftLine />
              </span>
              <span className="">Add more items</span>
            </Link>
          </div>
        </div>
        <div className="relative mx-1 rounded-lg w-[164px]">
          <div className="transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:border before:border-red-500 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-red-500 hover:text-white">
            <button
              onClick={() => removeAll()}
              className=" flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
            >
              <span>
                <AiOutlineCloseCircle size={25} />
              </span>
              Clear Cart Items
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleItem;
