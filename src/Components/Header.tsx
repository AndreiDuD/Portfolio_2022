import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons.jsx";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "../utils";
import { useState } from "react";

function Header() {
  const [selectedItem, setSelectedItem] = useState(null);
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
    <nav className="flex items-center fixed w-full justify-between border-dark dark:border-light border-b-[1px] bg-light dark:bg-dark">
      <div className="w-20 h-20 p-2">
        <img
          src="./logo.png"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:flex gap-14">
        {menu.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(item.id)}
            className={cx(
              "cursor-pointer font-medium uppercase text-dark/80 dark:text-light hover:scale-110",
              selectedItem === item.id
                ? "underline underline-offset-8 font-extrabold"
                : ""
            )}
          >
            <h2 className="uppercase">{item.name}</h2>
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
    </nav>
  );
}

export default Header;
