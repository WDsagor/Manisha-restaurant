import ContactDetails from "./ContactDetails";
import LocationMap from "./LocationMap";
export const metadata = {
  title: "Contact - Manisha",
  description: "Manisha is Indian Restaurant",
};
const page = () => {
  return (
    <div className="mx-auto">
      <LocationMap />
      <ContactDetails />
    </div>
  );
};

export default page;
