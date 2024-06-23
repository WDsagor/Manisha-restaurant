import Image from "next/image";
import { TbArrowBigRightLine } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

const SingleListCard = ({ fooditem }) => {
  const { catagoryName, items, discrip } = fooditem;

  const dispatch = useDispatch();
  const handleCart = (food) => {
    dispatch(addToCart(food));
  };
  return (
    <div className=" w-full max-w-screen-2xl mx-auto pb-10 px-2 lg:px-10">
      <div className=" max-w-screen-md mx-auto py-5">
        <h1 className="text-3xl text-center text-primary py-5">
          {catagoryName}
        </h1>
        {discrip && <p className="text-center">{discrip}</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-7 gap-5 max-w-screen-2xl mx-auto px-3">
        {items.map((item) => {
          return (
            <div
              key={item?.id}
              className=" hover:scale-105 transition-all cursor-pointer flex flex-col md:flex-row justify-between space-x-3 gap-2 hover:shadow-lg p-3 rounded-lg"
            >
              <div className="flex space-x-4">
                <Image
                  className="rounded-ee-[60px] rounded-es-[70px]	rounded-se-[50px] "
                  src={item?.imgUrl ? item.imgUrl : "/images/food1.png"}
                  height={100}
                  width={150}
                  alt={item?.name}
                />

                <div>
                  <h1 className=" font-bold text-primary uppercase text-lg">
                    {item?.name}
                  </h1>
                  <p className=" font-normal">{item?.discription}</p>
                  {item?.lamb && (
                    <p className=" font-normal mt-5">Lamb : {item?.lamb}</p>
                  )}
                  {item?.kingPrawns && (
                    <p className=" font-normal">
                      King Prawns{item?.kingPrawns}
                    </p>
                  )}
                </div>
              </div>
              <div className="shrink-0 flex flex-col justify-between items-end space-y-2">
                <p className="text-lg lg:text-2xl font-bold text-primary">
                  £{item?.price}
                </p>
                <div className="relative w-[103.5px] rounded-lg">
                  <div className=" duration-500 transition-colors  rounded-lg before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:rounded-lg before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:hover:scale-x-0 text-white">
                    <button
                      onClick={() => handleCart(item)}
                      className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-lg before:hover:scale-x-100 "
                    >
                      <span className="">Add Cart</span>
                      <span>
                        <TbArrowBigRightLine />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleListCard;
