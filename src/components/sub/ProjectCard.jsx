import { primaryButtonStyle } from "./styles";

const ProjectCard = ({ proj }) => {
  return (
    <div className="text-white bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-950 p-6 hover:border-x hover:border-primary hover:scale-105 transition-transform duration-500 overflow-hidden">
      <div>
        <h2 className="text-2xl">{proj.title}</h2>
        <h4 className="text-lg text-[#708ba1]">{proj.subheader}</h4>
      </div>

      <div className="my-8">
        <img
          src={proj.image}
          alt={proj.title}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <p className="text-justify">{proj.content}</p>

      {/* <div className="font-semibold my-4">
        Tech Stack :
        <div className="flex gap-4 mt-2 flex-wrap">
          {proj.techStack.map((skill) => (
            <div
              key={skill}
              className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1 text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div> */}

      <div className="flex gap-4 mt-4">
        <a href={proj.code} target="_blank">
          <button className={`${primaryButtonStyle}`}>code</button>
        </a>
        <a href={proj.live} target="_blank">
          <button className={`${primaryButtonStyle}`}>Live</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
