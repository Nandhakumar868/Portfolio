import { TypeAnimation } from "react-type-animation";
import { LINKS, PROFILE_DATA } from "../../constants/data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { UiCircleStyle } from "../sub/styles";

const Hero = () => {
  const { name, tagline, jobTitle, location, email, skills, stats } =
    PROFILE_DATA;
  const { github, linkedin, leetcode, resume } = LINKS;

  return (
    <section
      className="max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto"
      id="hero"
    >
      <div className="flex-1 text-center md:text-left z-[1]">
        <span className="text-white text-xl">Hello, I am</span>
        <h2 className="text-white text-3xl mt-1 mb-4 md:text-5xl">{name} 👋</h2>

        <span className="text-xs md:text-sm text-blue-200 font-thin">
          <TypeAnimation
            sequence={[
              "FullStack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="opacity-70 text-2xl"
            style={{ fontSize: "", display: "inline-block" }}
            repeat={Infinity}
          />
        </span>
        <p className="text-neutral-50 w-full text-xs font-light leading-5 my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8">
          {tagline}
        </p>

        {/* <div className="flex">
          <InfoCard
            count={stats.numberOfProjects}
            label="Projects Completed Successfully"
          />

          <InfoCard
            count={stats.certificationsEarned}
            label="Certifications Earned"
          />
        </div> */}

        <div className="flex flex-col items-center sm:flex-row justify-center md:justify-start gap-6">
          <button
            className="h-9 md:h-11 bg-transparent text-white text-sm px-6 rounded border border-primary  hover:text-primary"
            onClick={()=>document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </button>
          <a href={resume}>
            <button className="h-9 md:h-11 bg-primary text-white text-sm px-6 rounded border border-primary hover:bg-navBg flex justify-center items-center gap-1">
              Get Resume <MdDownload size={15} />
            </button>
          </a>
        </div>
      </div>

      <div className="flex gap-2 justify-center overflow-hidden md:gap-3 lg:gap-5 z-[1]">
        <div className="w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6">
          <div className="flex items-center justify-center">
            <img
              src="/Nandhakumar.png"
              alt="Nandhakumar"
              className="aspect-square bg-gray-800 rounded-full"
            />
          </div>

          <div className="bg-cardBg rounded-md text-center mt-3 p-4">
            <h5 className="text-sm md:text-base text-white">{name}</h5>
            <p className="text-slate-500 text-xs md:font-medium mt-1">
              {jobTitle}
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mt-1">
              <HiOutlineLocationMarker />
              <p className="font-medium">{location}</p>
            </div>
          </div>

          <InfoTitle
            icon={<FiMail size={20} className="text-sky-400" />}
            text={email}
          />

          <div className="flex items-center gap-2 flex-wrap my-3">
            {skills.map((item) => (
              <div
                key={item}
                className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1 text-white"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            <a href={github}>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="bg-blue-800/30 p-2 rounded hover:bg-primary hover:scale-125 transition-transform duration-500">
                  {<FaGithub className="text-lg md:text-xl" />}
                </div>
              </div>
            </a>

            <a href={linkedin}>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="bg-blue-800/30 p-2 rounded hover:bg-primary hover:scale-125 transition-transform duration-500">
                  {<FaLinkedin className="text-lg md:text-xl" />}
                </div>
              </div>
            </a>

            <a href={leetcode}>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="bg-blue-800/30 p-2 rounded hover:bg-primary hover:scale-125 transition-transform duration-500">
                  {<SiLeetcode className="text-lg md:text-xl" />}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${UiCircleStyle} absolute top-6 md:top-10 left-[-2.5rem] md:left-0`}
      />
    </section>
  );
};

const InfoTitle = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-4 bg-cardBg p-4 mt-3 rounded-md">
      {icon}
      <p className="text-xs md:text-sm font-normal text-white">{text}</p>
    </div>
  );
};

const InfoCard = ({ label, count }) => {
  return (
    <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded border border-blue-800/40 px-4 md:px-6 py-3">
      <h6 className="text-primary text-xl md:text-2xl font-semibold">
        {count}
      </h6>

      <span className="text-blue-300 text-xs md:text-sm font-normal">
        {label}
      </span>
    </div>
  );
};

export default Hero;
