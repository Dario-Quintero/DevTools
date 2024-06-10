import { useState } from "react";
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = (theme) => {
    const $html = document.querySelector("html");
    if (theme === "dark") {
      setTheme("light");
      $html.setAttribute("data-mode", "light");
    } else {
      setTheme("dark");
      $html.setAttribute("data-mode", "dark");
    }
  };

  return (
    <div>
      {theme === "dark" ? (
        <SunIcon
          className="w-7 h-7 text-black dark:text-white cursor-pointer"
          onClick={() => handleTheme(theme)}
        />
      ) : (
        <MoonIcon
          className="w-7 h-7 text-black dark:text-white cursor-pointer"
          onClick={() => handleTheme(theme)}
        />
      )}
    </div>
  );
};

export default ToggleTheme;
