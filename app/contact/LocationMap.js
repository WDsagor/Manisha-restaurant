import React from "react";

const LocationMap = () => {
  return (
    <div className=" max-w-screen-lg mx-auto">
      <iframe
        className=" rounded-3xl shadow-xl"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39833.082101061496!2d0.47945323266601575!3d51.392624110133355!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8cb88d3d5c581%3A0xae617d83af053f9e!2sManisha!5e0!3m2!1sen!2sbd!4v1706545197911!5m2!1sen!2sbd"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <div className=" text-center px-4">
        <h1 className=" mt-10 text-5xl font-bold">
          <span className=" text-primary">CONTACT US</span> FOR <br /> AN
          AWESOME INDIAN MENU
        </h1>
        <p className=" py-5">
          If you are looking for traditional Indian curry takeaway, contact
          Manisha, a modern Indian restaurant in Medway, Kent. We have an
          extensive Indian menu with traditional and modern dishes from the
          Indian subcontinent. You will find a delectable range of kebabs, rice
          items, curries, and desserts. We are open on all days of the week.
          Whether you want a quick curry takeaway or a lavish dining experience
          for your friends and family, head to our restaurant.{" "}
        </p>
      </div>
    </div>
  );
};

export default LocationMap;
