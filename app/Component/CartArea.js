import Link from "next/link";
import { FaBasketShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const CartArea = () => {
  const foodItems = useSelector((state) => state.cartItem.cartItems.length);
  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={1} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator text-white">
            <FaBasketShopping size={25} />

            <span className="badge bg-white py-3 border-none  text-red-600 indicator-item">
              {foodItems}
            </span>
          </div>
        </div>

        <div
          tabIndex={1}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          {foodItems > 0 ? (
            <div className="card-body">
              <span className="font-bold text-lg">
                You <span className="text-primary text-xl">{foodItems}</span>{" "}
                Items Added
              </span>
              <span className="">Subtotal: $999</span>
              <div className="card-actions">
                <Link
                  className="btn btn-primary btn-block text-white"
                  href="/cart"
                >
                  View Cart
                </Link>
              </div>
            </div>
          ) : (
            <div className="card-body items-center">
              <FaBasketShopping size={50} />
              <h2 className=" text-xl font-bold">
                Your Cart is <span className="text-red-600">Empty!</span>
              </h2>
              <div className="card-actions">
                <Link className="btn btn-primary btn-block" href="/restaurant">
                  Go to restaurant
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartArea;
