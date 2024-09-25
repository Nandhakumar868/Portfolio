import { useState } from "react";
import { Link } from "react-scroll";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";
import MobileNavbar from "./MobileNavbar";

export const ListStyle =
  "text-xs md:text-sm font-normal text-white relative cursor-pointer  after:w-full after:h-[3px] after:bg-primary after:absolute after:left-0 after:top-5 after:rounded after:translate-x-11 after:opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100 ";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen((menu) => !menu);
  };

  return (
    <>
      {isMenuOpen && (
        <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}

      <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10">
        <nav className="max-w-screen-xl bg-navbg rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 px-6">
          <ul className="flex items-center gap-14">
            <li>
              <Link
                to="hero"
                smooth
                spy
                offset={-80}
                className={`after:content-[''] ${ListStyle}`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                smooth
                spy
                offset={-80}
                className={`after:content-[''] ${ListStyle}`}
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                to="experience"
                smooth
                spy
                offset={-80}
                className={`after:content-[''] ${ListStyle}`}
              >
                Work Experience
              </Link>
            </li>

            <li>
              <Link
                to="about"
                smooth
                spy
                offset={-80}
                className={`after:content-[''] ${ListStyle}`}
              >
                About Me
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth
                spy
                offset={-80}
                className={`after:content-[''] ${ListStyle}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          className=" w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
