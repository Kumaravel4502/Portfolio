import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../framerMotion/variants";
const AboutMeMain = () => {
  return (
    <motion.div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
      variants={staggerContainer(0.2, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div
        variants={fadeIn("right", 0)}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
      >
        <AboutMeImage />
      </motion.div>
    </motion.div>
  );
};

export default AboutMeMain;
