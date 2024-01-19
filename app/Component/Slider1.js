import gsap from "gsap";
import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";

// const GreatVibes = Great_Vibes({
//   weight: ["400"],
//   display: "swap",
//   subsets: ["latin"],
// });
export const Slider1 = () => {
  const el = useRef();
  const t2 = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      t2.current = gsap
        .timeline({
          defaults: { delay: 0.75, duration: 0.75, ease: "power3.easeOut" },
          //   repeat: -1,
        })
        .fromTo(
          ".text1",
          { x: -200, scale: 0.5, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, scale: 1 }
        )
        .fromTo(
          ".text2",
          { y: -100, scale: 0.5, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, scale: 1 }
        )
        .fromTo(
          ".text3",
          { scale: 0.5, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            scale: 1,
            ease: "power3.inOut",
          },
          "<30%"
        )
        .fromTo(
          ".image1",
          { scale: 1, opacity: 0, x: "100%" },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scale: 1,
            ease: "power3.inOut",
            overflow: "hidden",
          },
          "<30%"
        );
    }, el);
  }, []);
  return (
    <div ref={el}>
      <div
        className="hero min-h-screen text-white"
        style={{
          background: `url("/images/Home-bg-1280x1072-2880w.png")`,
          backgroundSize: "cover",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}

        <div className="hero min-h-screen max-w-screen-2xl mx-auto container box">
          <div className="hero-content flex-col lg:flex-row">
            <div className="image1 overflow-hidden">
              <Image src="/images/hero-1152w.webp" height={200} width={500} alt="backgorund" />
            </div>

            <div className="max-w-3xl">
              <h1 className={` text1 text-5xl font-bold text-primar`}>
                TRADITIONALl
              </h1>
              <h1 className="text2 text-5xl font-bold">
                INDIAN DELICACIES IN MEDWAY KENT
              </h1>
              <p className=" text3 py-6">
                Looking for delectable Indian food? Welcome to Manisha, an
                authentic Indian restaurant in Medway, Kent. We are open 7 days
                a week, including bank holidays. If you enjoy the flavours of
                Indian cuisine, please visit us or call us to book a table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
