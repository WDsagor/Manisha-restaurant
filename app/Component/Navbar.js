"use client";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiEBike2Fill } from "react-icons/ri";
import Link from "next/link";
import { SearchBtn } from "./SearchBtn";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="fixed bg-current z-50 w-full justify-center max-w-screen-2xl top-0 left-[50%] translate-x-[-50%]">
      <div className="navbar font-normal mx-auto">
        <div className="navbar-start">
          <div className="dropdown xl:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className="drawer-button text-primary"
                >
                  <span className="group">
                    <BiMenuAltLeft
                      className="group-hover:hidden cursor-pointer transition-all duration-700"
                      size={30}
                    />
                    <BiMenu
                      className="cursor-pointer hidden group-hover:block transition-all duration-700"
                      size={30}
                    />
                  </span>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
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
          <div className=" flex justify-center items-center gap-2 text-white">
            <FaPhoneVolume color="green" size={30} />
            <p>
              <span>24/7 SUPPORT CENTER</span>
              <br />
              <span className="text-xl text-red-600">+1 718-904-4450R</span>
            </p>
          </div>
        </div>
        <div className="navbar-center xl:hidden">
          <Link href={"/"} className="px-2 xl:hidden">
            <Image src={logo} height={80} width={180} />
          </Link>
        </div>
        <div className="navbar-center hidden xl:flex font-normal">
          <ul className=" flex flex-row justify-center items-center gap-5 px-1 uppercase hover:bg-transparent text-white">
            <li
              className={` ${
                path === "/" ? "text-red-600" : ""
              } hover:text-red-600 transition-all`}
            >
              <Link className=" " href={"/"}>
                Home
              </Link>
            </li>
            <li
              className={` ${
                path === "/restaurant" ? "text-red-600" : ""
              } hover:text-red-600 transition-all`}
            >
              <Link href={"/restaurant"}>Restaurant</Link>
            </li>
            <Link href={"/"} className=" mx-2">
              <Image src={logo} height={80} width={180} />
            </Link>

            <li
              className={` ${
                path === "/order-online" ? "text-red-600" : ""
              } hover:text-red-600 transition-all`}
            >
              <Link href={"/order-online"}>Order Online</Link>
            </li>

            <li
              className={` ${
                path === "/contact" ? "text-red-600" : ""
              } hover:text-red-600 transition-all`}
            >
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="  mr-2">
            <SearchBtn />
          </div>
          <Link href={"/restaurant"} className=" relative mx-1 overflow-hidden">
            {/* <Button value="Order now" /> */}
            <div className=" duration-500  transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-bottom-right before:scale-x-100 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-md before:hover:scale-x-0 text-white">
              <button className="duration-500 flex gap-1 px-3 justify-center items-center py-2 rounded-md uppercase transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-green-600 before:transition-transform before:duration-300 before:content-[''] before:rounded-md before:hover:scale-x-100">
                <span>
                  <RiEBike2Fill />
                </span>
                <span className="">Order now</span>
              </button>
            </div>
          </Link>
          <a className="text-white px-3 rounded-md bg-green-600 py-2 ml-2">
            <PiShoppingCartSimpleDuotone size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
