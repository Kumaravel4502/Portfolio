import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div
      className="flex flex-col gap-3 sm:gap-4 w-full"
    >
      <SingleInfo text="Kumaravel4502q@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 9941925585" Image={FiPhone} />
      <SingleInfo text="Chennai, TamilNadu" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
