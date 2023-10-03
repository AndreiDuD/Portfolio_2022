import Strings from "../Shared/Strings";

function About() {
  return (
    <div className="mt-12 px-44 text-center flex flex-col items-center">
      <h2 className="text-2xl bold text-dark dark:text-light">
        {Strings.ABOUT_HEADING}
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
      <h2 className="my-5 text-gray ">{Strings.ABOUT_DESC}</h2>
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
    </div>
  );
}

export default About;
