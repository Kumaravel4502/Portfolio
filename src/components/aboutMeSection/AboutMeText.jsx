// import { Link } from "react-scroll";
import resumePdf from "../../assets/Kumaravel_FullStack_Developer_Resume.pdf";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Kumaravel, a Full-Stack Web Developer specializing in React-based
        frontend development and scalable backend solutions. I have hands-on
        experience building production-ready applications using Node.js,
        Express, MongoDB, and MySQL. I enjoy solving real-world problems,
        designing intuitive user experiences, and writing clean, efficient code
        while continuously upskilling with modern web technologies.
      </p>
      <a
        download="Kumaravel_FullStack_Developer_Resume.pdf"
        href={resumePdf}
        className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan"
      >
        Download CV
      </a>
    </div>
  );
};

export default AboutMeText;
