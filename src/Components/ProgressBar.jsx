import { useEffect, useState } from "react";

function ProgressBar() {
  const [scrollTop, setscrollTop] = useState();

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setscrollTop(scrolled);
  };

  return (
    <div className="w-4 bg-gray/90 fixed -ml-1 mt-20 h-full mb-4">
      <div
        className="bg-accent dark:bg-accentDark transition-all ease-out duration-1000"
        style={{ height: `${scrollTop}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
