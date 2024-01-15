"use client";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import Link from "next/link";
import { SearchBtn } from "./SearchBtn";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="absolute z-50 w-full max-w-screen-2xl mx-auto">
      <div className="navbar font-normal mx-auto">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="drawer-button text-primary">
                  <span className="group">
                    <BiMenuAltLeft
                      className="group-hover:hidden cursor-pointer transition-all duration-700"
                      size={30}
                    />
                    <BiMenu className="cursor-pointer hidden group-hover:block transition-all duration-700" size={30} />
                  </span>
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <li>
                    <a>Sidebar Item 1</a>
                  </li>
                  <li>
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Link href={"/"} className="px-2 lg:hidden">
            <Image src={logo} height={100} width={200} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex font-normal">
          <ul className=" flex flex-row gap-5 px-1 uppercase hover:bg-transparent text-white">
            <li className={` ${path === "/" ? "text-red-600" : ""} hover:text-red-600 transition-all`}>
              <Link className=" " href={"/"}>
                Home
              </Link>
            </li>
            <li className={` ${path === "/restaurant" ? "text-red-600" : ""} hover:text-red-600 transition-all`}>
              <Link href={"/restaurant"}>Restaurant</Link>
            </li>
            <li className={` ${path === "/shop" ? "text-red-600" : ""} hover:text-red-600 transition-all`}>
              <Link href={"/shop"}>Shop</Link>
            </li>

            <Link href={"/"} className=" px-2">
              <Image src={logo} height={100} width={200} />
            </Link>

            <li className={` ${path === "/order-online" ? "text-red-600" : ""} hover:text-red-600 transition-all`}>
              <Link href={"/order-online"}>Order Online</Link>
            </li>

            <li className={` ${path === "/contact" ? "text-red-600" : ""} hover:text-red-600 transition-all`}>
              <Link href={"/"}>Contact</Link>
            </li>
            <li>
              <SearchBtn />
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link href={"/restaurant"} className=" relative mx-1 overflow-hidden">
            <Button value="Order now" />
          </Link>
          <a className="btn btn-primary text-white">
            <PiShoppingCartSimpleDuotone size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
