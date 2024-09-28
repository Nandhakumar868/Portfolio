import { SKILLS } from "../../constants/data";

const Skills = () => {
  return (
    <section className="max-w-screen-xl px-6 mx-auto my-16 pb-20" id="skills">
      <h5 className="text-primary text-2xl md:text-3xl font-semibold text-center pb-14 md:pb-8">
        Skills
      </h5>

      <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
        <div className="grid md:grid-cols-2 md:gap-x-8 gap-y-4 md:gap-y-12 text-center">
          {/* Loop through each skill category (Programming,Frontend etc.) */}
          {Object.keys(SKILLS).map((category) => (
            <div
              key={category}
              className={`${category === "Databases" ? "md:col-span-2" : ""}`}
            >
              <h2 className="text-white font-bold mb-4">{category}</h2>

              <div className="flex gap-4 flex-wrap justify-center items-center">
                {/* Loop through the sills in each category */}
                {SKILLS[category].map((skill) => (
                  <div
                    key={skill.name}
                    className="relative group w-20 h-20 md:w-24 md:h-24 p-2 rounded-lg  shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-full h-full rounded-lg object-contain"
                    />
                    {/* Skill name on hover */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white bg-black  text-sm py-1 px-2 rounded-md shadow-md">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
