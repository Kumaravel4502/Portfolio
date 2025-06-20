import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeIn } from "../../framerMotion/variants";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.85)"]
  );
  const navPadding = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(251, 151, 24, 0)", "rgba(251, 151, 24, 1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="w-full fixed top-0 left-0 z-50 px-4 transition-all duration-300"
      style={{
        paddingTop: navPadding,
        paddingBottom: navPadding
      }}
    >
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        className="flex justify-between w-full max-w-[1200px] mx-auto items-center p-4 rounded-lg shadow-lg backdrop-blur-md"
        style={{
          backgroundColor: navBackground,
          borderLeft: "4px solid",
          borderColor: navBorder
        }}
      >
        <NavbarLogo />

        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-4">
          <NavbarBtn />
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            className="flex lg:hidden sm:block"
          >
            <NavbarToggler />
          </motion.div>
        </div>
      </motion.div>

      {menuOpen && (
        <motion.div
          className="lg:hidden fixed top-[4rem] left-0 w-full px-4"
          variants={fadeIn("down", 0)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <div className="bg-dark/90 backdrop-blur-lg w-full py-6 px-4 rounded-lg mt-2 shadow-lg border-l-2 border-secondary">
            <NavbarLinks />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavbarMain;
