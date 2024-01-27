import SingleListCard from "./SingleListCard";
import foodMenu from "./FoodMenu";

const ItemsCard = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className=" text-center py-10">
        <h1 className="text-5xl text-primary font-bold">Our Menu</h1>
      </div>
      <div className="grid grid-cols-5 gap-2 max-w-screen-md mx-auto">
        {foodMenu.map((fooditem) => {
          //   console.log(fooditem.catagoryName);
          return (
            <button
              className="btn btn-sm btn-primary"
              key={fooditem?.id}
              fooditem={fooditem}
            >
              {fooditem?.catagoryName}
            </button>
          );
        })}
      </div>
      <div>
        {foodMenu.map((fooditem) => {
          //   console.log(fooditem.catagoryName);
          return <SingleListCard key={fooditem?.id} fooditem={fooditem} />;
        })}
      </div>
    </div>
  );
};

export default ItemsCard;
