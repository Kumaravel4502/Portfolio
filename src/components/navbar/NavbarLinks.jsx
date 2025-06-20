import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";
import { staggerContainer, fadeIn } from "../../framerMotion/variants";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(closeMenu());
  };

  return (
    <motion.ul
      className="flex lg:flex-row sm:flex-col lg:gap-8 sm:gap-6 font-medium lg:items-center sm:items-start lg:relative sm:w-full"
      variants={staggerContainer(0.1, 0.2)}
      initial="hidden"
      animate="show"
    >
      {links.map((link, index) => (
        <motion.li
          key={index}
          className="relative group"
          variants={fadeIn("down", 0)}
          whileHover="hover"
        >
          <Link
            spy={true}
            smooth={true}
            duration={800}
            offset={-100}
            to={link.section}
            onClick={handleLinkClick}
            className="cursor-pointer text-lightGray  hover:text-primary transition-all duration-300 relative py-2 px-1 block lg:text-base sm:text-lg"
            activeClass="text-secondary"
          >
            {link.link}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary"
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1, originX: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default NavbarLinks;
