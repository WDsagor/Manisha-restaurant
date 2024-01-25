import Image from "next/image";
import React from "react";
import { BsShop } from "react-icons/bs";
import { TbArrowBigRightLine } from "react-icons/tb";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-current ">
      <div className="footer px-10 py-20 text-white max-w-screen-2xl mx-auto">
        <div>
          <Image src="/images/logo.png" height={100} width={200} alt="logo" />
          <p className="my-2 font-light">
            Tel: 01634 710 701 / 01634 716 877 <br />
            Email: reservations@manishaindian.co.uk
          </p>

          <header className="text-2xl uppercase">Download our apps</header>
          <div className="flex gap-3">
            <Image
              src="/images/Google+Play+Logo-402w.webp"
              height={50}
              width={100}
              alt="play store"
            />
            <Image
              src="/images/app+store-370w.webp"
              height={50}
              width={100}
              alt="app store logo"
            />
          </div>
        </div>

        <nav>
          <header className="text-xl text-white uppercase mb-4">
            Quick Link
          </header>
          <a className=" uppercase text-white cursor-pointer hover:text-red-600 transition-all pb-2">
            Home
          </a>
          <a className=" uppercase text-white cursor-pointer hover:text-red-600 transition-all pb-2">
            Resturant
          </a>
          <a className=" uppercase text-white cursor-pointer hover:text-red-600 transition-all pb-2">
            About us
          </a>
          <a className=" uppercase text-white cursor-pointer  hover:text-red-600 transition-all pb-2">
            Contact
          </a>
        </nav>
        <div className="w-full">
          <header className="text-xl text-white uppercase mb-2">
            our location
          </header>
          <iframe
            className=" rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9957.874265501525!2d0.4978204!3d51.3944446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8cb88d3d5c581%3A0xae617d83af053f9e!2sManisha!5e0!3m2!1sen!2sbd!4v1705666777944!5m2!1sen!2sbd"
            width="90%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>

        <nav>
          <header className="text-xl text-white">OPENING HOURS</header>
          <p className=" text-red-600 text-sm mt-4">
            <span className="text-white">Monday – Friday:</span> 8am – 4pm
          </p>
          <p className=" text-red-600 text-sm">
            <span className="text-white">Saturday::</span> 8am – 12am
          </p>
          <div className="flex gap-2 mt-4">
            {/* https://shorturl.at/osBL0 */}
            <span className=" cursor-pointer border border-white rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <TiSocialFacebook size={20} />
            </span>
            <span className=" cursor-pointer border border-white rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <TiSocialTwitter size={20} />
            </span>
            <span className=" cursor-pointer border border-white rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <TiSocialInstagram size={20} />
            </span>
            <span className=" cursor-pointer border border-white rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <BsShop size={20} />
            </span>
          </div>
        </nav>
      </div>
      <section className="border-t-[1px] border-t-slate-600">
        <aside className="py-5 px-4 text-white w-full max-w-screen-2xl mx-auto text-center">
          <p>
            Copyright © {year} - All right reserved by{" "}
            <span className="text-blue-400 ml-1">KodeEnd IT Solutions AB</span>
          </p>
        </aside>
      </section>
    </footer>
  );
};

export default Footer;
