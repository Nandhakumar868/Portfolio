import { PROJECTS_LIST } from "../../constants/data";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto my-16 pb-20" id="works">
      <h5 className="text-primary text-2xl md:text-3xl font-semibold text-center pb-14 md:pb-8">
        Works
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_LIST.map((proj) => (
          <ProjectCard key={proj.title} proj={proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
