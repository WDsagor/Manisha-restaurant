import HappySudadyArea from "./Component/HappySudadyArea";
import HomeSlider from "./Component/HomeSlider";
import HouseSpeacial from "./Component/HouseSpeacial";
import OfferArea from "./Component/OfferArea";
import SpecialDish from "./Component/SpecialDish";

export default function Home() {
  return (
    <main className="">
      {/* <h1 className="font-normal text-4xl"> Home page</h1> */}
      <HomeSlider />
      <OfferArea />
      <HappySudadyArea />
      <SpecialDish />
      <HouseSpeacial />
    </main>
  );
}
