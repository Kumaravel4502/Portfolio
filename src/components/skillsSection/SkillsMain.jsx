import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../framerMotion/variants";
import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiMui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    skill: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    skill: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#06B6D4",
  },
  {
    skill: "Material UI",
    icon: SiMui,
    color: "#007FFF",
  },
];

const SkillsMain = () => {
  return (
    <motion.div
      id="skills"
      className="section-padding relative overflow-hidden"
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="relative z-10 container-width">
        <motion.div variants={fadeIn("down", 0.2)}>
          <SkillsText />
        </motion.div>

        <div className="my-16 sm:my-20">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 px-4">
            {skills.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0)}
                >
                  <SingleSkill
                    text={item.skill}
                    imgSvg={<item.icon style={{ color: item.color }} />}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-[-10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[120px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror"
        }}
      />
      <motion.div
        className="absolute bottom-[5%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-secondary/5 blur-[100px] -z-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
          delay: 2
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[30%] w-[15vw] h-[15vw] rounded-full bg-primaryLight/5 blur-[80px] -z-10"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "mirror",
          delay: 5
        }}
      />
    </motion.div>
  );
};

export default SkillsMain;
