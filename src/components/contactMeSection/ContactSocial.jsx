import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div
      className="flex gap-4 mt-2 justify-center w-full"
    >
      <SingleContactSocial link="https://www.linkedin.com/in/kumaravel4502/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Kumaravel4502/Kumaravel4502" Icon={FaGithub} />
      <SingleContactSocial link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
