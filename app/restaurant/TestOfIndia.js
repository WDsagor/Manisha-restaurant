import Image from "next/image";

const TestOfIndia = () => {
  return (
    <div
      className="hero"
      style={{
        // backgroundImage: "url(/images/menu-image.png)",
        backgroundImage: "url(/images/Home-bg-1280x1072-2880w.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <div className="hero-overlay bg-opacity-10 bg-black"></div> */}
      <div className="mt-20 text-center max-w-screen-2xl mx-auto flex flex-col align-middle justify-center">
        <div className="mx-auto pb-5">
          <Image
            height={500}
            width={600}
            src={"/images/monisha-restrunt.webp"}
          />
        </div>
        <div className=" max-w-5xl mb-20">
          <h1 className="mb-5 text-5xl font-bold text-slate-300 leading-normal">
            ENJOY THE REAL
            <br />
            <span className="text-primary">TASTE OF INDIA</span> IN MEDWAY, KENT
          </h1>
          <p className="text-accent text-xl font-light">
            Are you looking for some great Indian food at a family-friendly
            restaurant? Manisha is one of the most popular restaurants in
            Medway, Kent for authentic Indian dishes such as biryanis, kebabs,
            curries, and traditional desserts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestOfIndia;
