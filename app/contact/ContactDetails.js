import React from "react";
import { BsShop } from "react-icons/bs";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

const ContactDetails = () => {
  return (
    <div className=" my-10 flex flex-col md:flex-row gap-5 justify-between max-w-screen-md mx-auto">
      <div>
        <h2 className="text-3xl text-primary uppercase">Our contact details</h2>
      </div>
      <div>
        <nav>
          <header className="text-3xl text-primary">OPENING HOURS</header>
          <p className=" text-primary text-sm mt-4">
            <span className="text-primary">Monday – Friday: </span> 8am – 4pm
          </p>
          <p className=" text-primary text-sm">
            <span className="text-primary">Saturday: </span> 8am – 12am
          </p>
          <div className="flex gap-2 mt-4">
            {/* https://shorturl.at/osBL0 */}
            <span className=" cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <TiSocialFacebook size={20} />
            </span>
            <span className=" cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <TiSocialTwitter size={20} />
            </span>
            <span className=" cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <TiSocialInstagram size={20} />
            </span>
            <span className=" cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600">
              <BsShop size={20} />
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ContactDetails;
