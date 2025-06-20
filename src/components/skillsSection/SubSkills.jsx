import { motion } from "framer-motion";
import { FaGitAlt, FaGithub, FaFigma, FaNpm } from "react-icons/fa";
import { SiVercel, SiNetlify, SiFirebase, } from "react-icons/si";
import { fadeIn, staggerContainer } from "../../framerMotion/variants";

const tools = [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  // { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
  // { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "npm", icon: FaNpm, color: "#CB3837" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }
];

const SubSkills = () => {
  return (
    <div className="py-16 relative overflow-hidden bg-gradient-to-b from-dark/30 to-darkBlue/30 backdrop-blur-sm">
      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-[1200px] mx-auto px-4"
      >
        <motion.h3
          variants={fadeIn("down", 0.2)}
          className="text-3xl font-medium text-center mb-12 text-lightGray"
        >
          Tools & <span className="text-secondary">Technologies</span>
        </motion.h3>

        <div
          className="flex flex-wrap justify-center items-center gap-8 max-w-[1000px] mx-auto"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0)}
              className="flex flex-col items-center mx-2 my-3"
            >
              <motion.div
                className="bg-darkBlue w-14 h-14 flex items-center justify-center rounded-lg shadow-highlight border-b-2 border-primary/30"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <tool.icon className="text-2xl" style={{ color: tool.color }} />
              </motion.div>
              <p className="text-sm text-lightGray mt-2">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SubSkills;
