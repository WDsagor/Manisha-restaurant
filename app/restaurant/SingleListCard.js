const SingleListCard = ({ fooditem }) => {
  const { catagoryName, items, discrip } = fooditem;
  return (
    <div className=" max-w-screen-xl mx-auto pb-10">
      <div className=" max-w-screen-md mx-auto py-5">
        <h1 className="text-3xl text-center text-primary py-5">
          {catagoryName}
        </h1>
        {discrip && <p className="text-center">{discrip}</p>}
      </div>
      <div className="grid grid-cols-2 gap-x-7 gap-5 max-w-screen-lg mx-auto px-3">
        {items.map((item) => {
          return (
            <div
              key={item?.id}
              className=" hover:scale-105 transition-all cursor-pointer flex justify-between gap-2 hover:shadow-lg p-3 rounded-lg"
            >
              <div>
                <h1 className=" font-bold text-primary text-lg">
                  {item?.name}
                </h1>
                <p className=" font-normal">{item?.discription}</p>
                {item?.lamb && (
                  <p className=" font-normal mt-5">Lamb : {item?.lamb}</p>
                )}
                {item?.kingPrawns && (
                  <p className=" font-normal">King Prawns{item?.kingPrawns}</p>
                )}
              </div>
              <p className="text-lg font-bold text-primary">£{item?.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleListCard;
