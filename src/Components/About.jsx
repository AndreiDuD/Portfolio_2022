function About() {
  return (
    <section className="mt-12 text-center flex flex-col items-center">
      <h2 className="text-2xl bold text-dark dark:text-light">
        Full-Stack Developer and Data Analyst
      </h2>
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="mt-6 w-10 h-10 bg-accent dark:bg-accentDark p-2 rounded-full text-light dark:text-dark"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
        />
      </svg>
      <h2 className="my-5 text-gray p-2 md:px-24 lg:px-44">
        As a Full-Stack Developer, I immerse myself in crafting dynamic,
        user-centric web applications that bridge the gap between innovation and
        user experience. My toolkit includes a versatile array of technologies.
        I am excited to showcase my portfolio, where you can explore my projects
        and witness the fusion of my data-driven insights and web development
        skills.
      </h2>
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="mt-6 w-10 h-10 bg-accent dark:bg-accentDark p-2 rounded-full text-light dark:text-dark"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
        />
      </svg>
    </section>
  );
}

export default About;
