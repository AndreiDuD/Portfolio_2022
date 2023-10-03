import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons.jsx";
import { useThemeSwitch } from "../Hooks/useThemeSwitch.js";
import { cx } from "../utils/index.js";
import { useState } from "react";

function Header() {
  const [selectedItem, setSelectedItem] = useState();
  const [mode, setMode] = useThemeSwitch();
  const menu = [
    { id: 1, name: "Home" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Projects" },
    { id: 4, name: "Contact" },
  ];

  const toggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <header className="flex items-center fixed w-full justify-between bg-light dark:bg-dark z-50">
      <div className="w-20 h-20 p-2">
        <img
          src="./logo.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:flex gap-14">
        {menu.map((item, index) => (
          <div key={index} onClick={() => setSelectedItem(item.id)}>
            <h2
              className={`cursor-pointer font-medium uppercase transition duration-200 ${
                selectedItem === item.id
                  ? "text-accent dark:text-accentDark border-b-2"
                  : "text-dark/80 dark:text-light mb-[2px] hover:mb-0"
              }  hover:scale-110 hover:text-accent dark:hover:text-accentDark hover:border-b-2`}
            >
              {item.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="flex gap-7">
        <button
          onClick={toggle}
          className={cx(
            "w-6 h-6 mr-4 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>

        <a
          href="/"
          className="w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="w-4 hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="/"
          className="w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <TwitterIcon className="w-4 hover:scale-125 transition-all ease duration-200 " />
        </a>
        <a
          href="/"
          className="w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <GithubIcon className="w-4 hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </header>
  );
}

export default Header;
