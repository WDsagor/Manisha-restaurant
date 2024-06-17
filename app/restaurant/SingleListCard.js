import Image from "next/image";

const SingleListCard = ({ fooditem }) => {
  const { catagoryName, items, discrip, imgUrl } = fooditem;
  console.log(fooditem);
  console.log(imgUrl);
  return (
    <div className=" max-w-screen-2xl mx-auto pb-10 px-10">
      <div className=" max-w-screen-md mx-auto py-5">
        <h1 className="text-3xl text-center text-primary py-5">
          {catagoryName}
        </h1>
        {discrip && <p className="text-center">{discrip}</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-5 max-w-screen-2xl mx-auto px-3">
        {items.map((item) => {
          return (
            <div
              key={item?.id}
              className=" hover:scale-105 transition-all cursor-pointer flex justify-between space-x-3 gap-2 hover:shadow-lg p-3 rounded-lg"
            >
              <div className="flex space-x-4">
                <Image
                  className="rounded-ee-[60px] rounded-es-[70px]	rounded-se-[50px]"
                  src={`${
                    imgUrl ? imgUrl : "/images/Chicken-Tikka-Biryani.jpg"
                  }`}
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
              <div className="shrink-0 flex flex-col justify-between">
                <p className="text-lg font-bold text-primary">£{item?.price}</p>
                <button className="btn btn-sm mt-5 uppercase ">
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleListCard;
