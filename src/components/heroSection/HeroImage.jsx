import { motion as Motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Image from "../Image";

const HeroImage = () => {
  return (
    <Motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-full flex items-center justify-center w-full md:w-1/2"
    >
      <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
        <Image
          src="https://ik.imagekit.io/11ie2ifrf/portfolio-hero-2.png"
          alt="Hero Image"
        />
      </div>
    </Motion.div>
  );
};

export default HeroImage;
