import { useEffect, useState } from "react";

import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    const $html = document.querySelector("html");

    if (!theme) {
      $html.setAttribute("data-mode", "dark");
      setTheme("dark");
    } else {
      $html.setAttribute("data-mode", theme);
      setTheme(theme);
    }
  }, [theme]);

  const handleTheme = (theme) => {
    const $html = document.querySelector("html");

    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      $html.setAttribute("data-mode", "light");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      $html.setAttribute("data-mode", "dark");
    }
  };

  return (
    <div>
      {theme === "dark" ? (
        <MoonIcon
          className="w-7 h-7 text-black dark:text-white cursor-pointer"
          onClick={() => handleTheme(theme)}
        />
      ) : (
        <SunIcon
          className="w-7 h-7 text-black dark:text-white cursor-pointer"
          onClick={() => handleTheme(theme)}
        />
      )}
    </div>
  );
};

export default ToggleTheme;
