import { projects } from "../Shared";

function Projects() {
  return (
    <section className="px-12 mt-12 text-dark dark:text-light text-medium">
      <div className="flex items-center justify-center">
        <div className="w-full border mx-4 text-accent dark:text-accentDark" />
        <h2 className="font-bold text-4xl mb-2 ">Projects</h2>
        <div className="w-full border mx-4 text-accent dark:text-accentDark" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 sm:px-0 mt-12">
        {projects.map(({ id, src, demoLink, codeLink, tags }) => (
          <div key={id} className="shadow-md shadow-gray rounded-lg ">
            <div className="relative duration-300 hover:scale-105">
              <img src={src} alt="project image" className="rounded-md " />
              <div
                className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-dark/40 from-0% to-dark rounded-md z-10 opacity-0 transition-opacity hover:opacity-100
            "
              >
                <div className="absolute bottom-1 left-[5%]">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <p key={tag.name} className={`${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <a
                href={demoLink}
                className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
              >
                Demo
              </a>
              <a
                href={codeLink}
                className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
