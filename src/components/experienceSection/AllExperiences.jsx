import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "CodSoft",
    date: "2023",
    responsibilities: [
      "Implementing reusable components.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
      "Utilized Git for efficient code management and collaboration.",
    ],
  },
  {
    job: "Full Stack Developer Intern",
    company: "Revamp Academy",
    date: "April 2025 - June 2025",
    responsibilities: [
      "Developed responsive web applications and backend APIs using the MERN stack including landing pages forms with validation, review systems, and leaderboard interfaces.",
      "Collaborated with cross-functional teams to design and implement new features, ensuring seamless integration between front-end and back-end components.",
      "Participated in code reviews and contributed to improving code quality and performance across the application.",
    ],
  },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
