import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 max-w-screen-xl mx-auto">
      <img src="/logo.svg" alt="Logo" className="h-10 mb-4 md:mb-0" />

      <ul className="flex flex-col md:flex-row items-start md:items-center md:gap-16 gap-4">
        <li className="flex gap-2 items-center">
          <CiLocationOn className="text-[#46a358]" />
          <p className="text-sm">70 West Buckingham Ave.</p>
        </li>
        <li className="flex gap-2 items-center">
          <IoMailOutline className="text-[#46a358]" />
          <p className="text-sm">contact@greenshop.com</p>
        </li>
        <li className="flex gap-2 items-center">
          <FiPhoneCall className="text-[#46a358]" />
          <p className="text-sm">+88 01911 717 490</p>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
