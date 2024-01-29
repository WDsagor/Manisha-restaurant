import ContactDetails from "./ContactDetails";
import LocationMap from "./LocationMap";

const page = () => {
  return (
    <div className="mt-20 mx-auto">
      <LocationMap />
      <ContactDetails />
    </div>
  );
};

export default page;
