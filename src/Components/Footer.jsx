function Footer() {
  return (
    <footer className="relative w-full border-dark dark:border-light border-t-[1px] bg-light dark:bg-dark">
      <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between mr-10 ml-2">
        <img src="./logo.png" alt="logo" className="w-20 mt-2" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 text-dark dark:text-light uppercase transition duration-200 mb-2 md:mr-10 text-xl">
          <li>
            <a
              href=""
              className="hover:text-accent dark:hover:text-accentDark hover:border-b-2"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className=" hover:text-accent dark:hover:text-accentDark hover:border-b-2"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href=""
              className=" hover:text-accent dark:hover:text-accentDark hover:border-b-2"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href=""
              className=" hover:text-accent dark:hover:text-accentDark hover:border-b-2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <span className="flex justify-center items-center text-dark dark:text-light font-normal">
        &copy; 2023 Andrei Duduman
      </span>
    </footer>
  );
}

export default Footer;
