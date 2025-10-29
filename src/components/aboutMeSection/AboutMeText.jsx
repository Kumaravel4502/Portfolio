// import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Kumaravel, a Full-Stack Web Developer with expertise in React and
        modern front-end technologies. I build real-world, scalable projects and
        have hands-on experience working across the full stack with Node.js,
        Express, and databases like MongoDB and MySQL. I’m passionate about
        creating seamless user experiences, writing clean and maintainable code,
        and continuously learning to stay ahead in the fast-evolving tech
        landscape.
      </p>
      <a
        download="Kumaravel_Fullstack_Developer_Resume.pdf"
        href="/public/Kumaravel_FullStack_Developer_Resume.pdf"
        className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer text-white hover:text-cyan"
      >
        Download CV
      </a>
    </div>
    
  );
};

export default AboutMeText;
