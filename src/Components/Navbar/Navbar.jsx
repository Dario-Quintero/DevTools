import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ToggleTheme from "./ToggleTheme/ToggleTheme";
import CloseIcon from "../icons/CloseIcon";

function MenuResponsive({ view, setView }) {
  const { pathname } = useLocation();
  if (!view) {
    null;
  } else {
    return (
      <div className="w-full h-screen flex flex-col fixed top-0 left-0 backdrop-blur-lg z-50">
        <nav className="flex items-center justify-between gap-4 p-4 bg-white dark:bg-black w-full">
          <Link to={"/"}>
            <LogoIcon className="w-8 h-8 text-black dark:text-white" />
          </Link>
          <div className="flex md:hidden gap-2 items-center">
            <ToggleTheme />
            <CloseIcon
              className="w-8 h-8 text-black dark:text-white cursor-pointer"
              onClick={() => setView(!view)}
            />
          </div>
        </nav>

        <div className="w-full h-full bg-white/90 dark:bg-black/90 px-4 py-4 relative">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/front-end"
                className={`text-black text-sm dark:text-white/70 transition-all ${
                  pathname === "/front-end"
                    ? "text-blue-500 dark:text-blue-500 font-bold"
                    : "font-medium dark:hover:text-white"
                }`}
              >
                Front-End
              </Link>
            </li>
            <li>
              <Link
                to="/back-end"
                className={`text-black text-sm dark:text-white/70 transition-all ${
                  pathname === "/back-end"
                    ? "text-blue-500 dark:text-blue-500 font-bold"
                    : "font-medium dark:hover:text-white"
                }`}
              >
                Back-End
              </Link>
            </li>
            <li>
              <Link
                to="/extensions"
                className={`text-black text-sm dark:text-white/70 transition-all ${
                  pathname === "/extensions"
                    ? "text-blue-500 dark:text-blue-500 font-bold"
                    : "font-medium dark:hover:text-white"
                }`}
              >
                Extensiones
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={`text-black text-sm dark:text-white/70 transition-all ${
                  pathname === "/courses"
                    ? "text-blue-500 dark:text-blue-500 font-bold"
                    : "font-medium dark:hover:text-white"
                }`}
              >
                Cursos
              </Link>
            </li>
            <SearchBar />
          </ul>
        </div>
      </div>
    );
  }
}

function Navbar() {
  const { pathname } = useLocation();
  const [view, setView] = useState(false);
  return (
    <nav className="flex items-center justify-between gap-4 p-4 bg-white dark:bg-black w-full">
      <MenuResponsive view={view} setView={setView} />

      <div className="flex gap-10 items-center">
        <Link to={"/"}>
          <LogoIcon className="w-8 h-8 text-black dark:text-white" />
        </Link>
        <ul className="hidden md:flex gap-3 items-center">
          <li>
            <Link
              to="/front-end"
              className={` text-black dark:text-white/70 transition-all ${
                pathname === "/front-end"
                  ? "text-blue-500 dark:text-blue-500 font-bold"
                  : "font-medium dark:hover:text-white"
              }`}
            >
              Front-End
            </Link>
          </li>
          <li>
            <Link
              to="/back-end"
              className={` text-black dark:text-white/70 transition-all ${
                pathname === "/back-end"
                  ? "text-blue-500 dark:text-blue-500 font-bold"
                  : "font-medium dark:hover:text-white"
              }`}
            >
              Back-End
            </Link>
          </li>
          <li>
            <Link
              to="/extensions"
              className={` text-black dark:text-white/70 transition-all ${
                pathname === "/extensions"
                  ? "text-blue-500 dark:text-blue-500 font-bold"
                  : "font-medium dark:hover:text-white"
              }`}
            >
              Extensiones
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className={` text-black dark:text-white/70 transition-all ${
                pathname === "/courses"
                  ? "text-blue-500 dark:text-blue-500 font-bold"
                  : "font-medium dark:hover:text-white"
              }`}
            >
              Cursos
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:flex gap-4 items-center">
        <SearchBar />
        <ToggleTheme />
      </div>

      <div className="flex md:hidden gap-2 items-center">
        <ToggleTheme />
        <MenuIcon
          className="w-8 h-8 text-black dark:text-white cursor-pointer"
          onClick={() => setView(!view)}
        />
      </div>
    </nav>
  );
}

export default Navbar;
