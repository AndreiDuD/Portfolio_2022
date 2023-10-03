import { servicesList } from "../Shared";

function Skills() {
  return (
    <section className="px-12 mt-12">
      <div className="flex items-center justify-center">
        <div className="w-full border mx-4 text-accent dark:text-accentDark" />
        <h2 className="font-bold text-4xl mb-2 text-dark dark:text-light">
          Skills
        </h2>
        <div className="w-full border mx-4 text-accent dark:text-accentDark" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-around mt-16">
        {servicesList.map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col justify-center items-center gap-6"
          >
            <div className="bg-accent/70 dark:bg-accentDark/70 rounded-full w-24 h-24 mb-8 shadow-2xl duration-300 hover:shadow-black hover:dark:shadow-gray ring-accent dark:ring-accentDark hover:ring-4">
              <img
                src={item.logo}
                alt={item.title}
                className="w-24 h-24 p-5 hover:scale-110 transition-all"
              />
              <h2 className="font-bold text-dark dark:text-light">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
