import GardenCare from "../GardenCare/GardenCare";
import Newsletter from "../Newsletter/Newsletter";
import PlantRenovation from "../PlantRenovation/PlantRenovation";
import WateringGarden from "../WateringGarden/WateringGarden";
import ContactInfo from "../ContactInfo/ContactInfo";
import HelpAndGuide from "../HelpAndGuide/HelpAndGuide";

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 mt-[100px] text-gray-700 p-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center">
            <GardenCare />
            <PlantRenovation />
            <WateringGarden />
            <Newsletter />
          </div>
        </div>
      </footer>
      <div className="bg-green-100">
        <div className="container">
          <ContactInfo />
        </div>
      </div>
      <div className="bg-gray-200 p-6">
        <div className="container">
          <HelpAndGuide />
        </div>
      </div>
    </>
  );
}

export default Footer;
