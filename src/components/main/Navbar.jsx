import { useState } from "react";
import { ListStyle, UiCircleStyle } from "../sub/styles";
import { RiCloseFill } from "react-icons/ri";
import { CgMenuMotion } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => {
    setIsMenuOpen((menu) => !menu);
  };

  const handleScroll = (sectionId) => {
    if (isMenuOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {isMenuOpen && (
        <div className="w-screen fixed top-0 z-20 md:hidden">
          <div className="w-1/2 h-screen flex flex-col p-8 bg-background overflow-hidden">
            <div className={`${UiCircleStyle} ml-[-5rem] mt-[-2.5rem]  `} />
            <ul>
              <NavbarListItem
                scrollTo="hero"
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
                mobile={true}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Home
              </NavbarListItem>

              <NavbarListItem
                scrollTo="experience"
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
                mobile={true}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Experience
              </NavbarListItem>

              <NavbarListItem
                scrollTo="skills"
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
                mobile={true}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Skills
              </NavbarListItem>

              <NavbarListItem
                scrollTo="works"
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
                mobile={true}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Works
              </NavbarListItem>

              {/* <NavbarListItem
                scrollTo="contact"
                isOpen={isMenuOpen}
                setIsOpen={setIsMenuOpen}
                mobile={true}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              >
                Contact
              </NavbarListItem> */}
            </ul>

            <button
              className="h-10 bg-primary text-white text-xs md:text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block"
              onClick={() => handleScroll("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}

      <div className="w-screen hidden md:flex items-center justify-center py-4 fixed top-0 z-10">
        <nav className="max-w-screen-xl bg-navBg rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 px-6">
          <ul className="flex items-center gap-14">
            <NavbarListItem
              scrollTo="hero"
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              mobile={false}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            >
              Home
            </NavbarListItem>

            <NavbarListItem
              scrollTo="experience"
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              mobile={false}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            >
              Experience
            </NavbarListItem>

            <NavbarListItem
              scrollTo="skills"
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              mobile={false}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            >
              Skills
            </NavbarListItem>

            <NavbarListItem
              scrollTo="works"
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              mobile={false}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            >
              Works
            </NavbarListItem>

            <NavbarListItem
              scrollTo="contact"
              isOpen={isMenuOpen}
              setIsOpen={setIsMenuOpen}
              mobile={false}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            >
              Contact
            </NavbarListItem>
          </ul>
        </nav>
      </div>

      <div className="p-3 fixed top-0 right-0 z-50">
        <button
          className="w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>
    </>
  );
};

export const NavbarListItem = ({
  children,
  scrollTo,
  isOpen,
  setIsOpen,
  mobile,
  activeSection,
  setActiveSection,
}) => {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const isActive = activeSection === scrollTo;

  return (
    <li className={`${mobile ? "mb-5" : ""}`}>
      <a
        className={`after:content-[''] ${ListStyle} ${
          isActive
            ? "text-[#068bf8] after:translate-x-[-] after:opacity-100"
            : ""
        }`}
        onClick={() => handleScroll(scrollTo)}
      >
        {children}
      </a>
    </li>
  );
};

export default Navbar;
