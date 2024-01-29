import React from "react";
import { BsShop } from "react-icons/bs";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
} from "react-icons/ti";

const ContactDetails = () => {
  return (
    <section className="bg-orange-50">
      <div className=" p-2 py-10 flex flex-col md:flex-row gap-5 justify-between max-w-screen-md mx-auto">
        <div>
          <h2 className="text-3xl text-primary uppercase">
            Our contact details
          </h2>
          <p className="mt-4">
            <span className=" font-bold text-primary leading-normal text-lg">
              Telephone:
            </span>{" "}
            01634 710 701 / 01634 716 877
          </p>
          <p>
            <span className=" font-bold text-primary leading-normal text-lg">
              Email:
            </span>{" "}
            reservations@manishaindian.co.uk
          </p>
          <p>
            <span className=" font-bold text-primary leading-normal text-lg">
              Address:
            </span>{" "}
            Manisha, 18 High Street Strood, Rochester ME2 4AP
          </p>
        </div>
        <div>
          <div>
            <header className="text-3xl text-primary uppercase">
              Follow Social Media
            </header>

            <div className="flex gap-2 mt-4">
              {/* https://shorturl.at/osBL0 */}
              <span className=" hover:scale-110 transition-all cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600">
                <TiSocialFacebook size={20} />
              </span>
              <span className="hover:scale-110 transition-all  cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600 ">
                <TiSocialTwitter size={20} />
              </span>
              <span className=" hover:scale-110 transition-all   cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600 ">
                <TiSocialInstagram size={20} />
              </span>
              <span className=" hover:scale-110 transition-all  cursor-pointer border border-primary rounded-full hover:border-red-600 p-2 hover:text-red-600">
                <BsShop size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
