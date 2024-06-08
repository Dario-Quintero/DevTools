import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";

function MenuResponsive({ view, setView }) {
  const { pathname } = useLocation();
  if (!view) {
    null;
  } else {
    return (
      <div
        onClick={() => setView(!view)}
        className="w-screen h-screen flex flex-col fixed top-0 left-0 bg-black/50 backdrop-blur-sm z-50"
      >
        <div className="w-full bg-white px-4 py-4 relative rounded-md shadow-sm">
          <div className="flex flex-col gap-4">
            <Link
              to="/front-end"
              className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
                pathname === "/front-end"
                  ? "bg-black text-white"
                  : "hover:bg-black/15 hover:text-black"
              }`}
            >
              Front-End
            </Link>
            <Link
              to="/back-end"
              className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
                pathname === "/back-end"
                  ? "bg-black text-white "
                  : "hover:bg-black/15 hover:text-black"
              }`}
            >
              Back-End
            </Link>
            <Link
              to="/extensions"
              className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
                pathname === "/extensions"
                  ? "bg-black text-white "
                  : "hover:bg-black/15 hover:text-black"
              }`}
            >
              Extensiones
            </Link>
            <Link
              to="/courses"
              className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
                pathname === "/courses"
                  ? "bg-black text-white "
                  : "hover:bg-black/15 hover:text-black"
              }`}
            >
              Cursos
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function Navbar() {
  const { pathname } = useLocation();
  const [view, setView] = useState(false);
  return (
    <nav className="flex items-center justify-between gap-10 p-4 bg-white dark:bg-black w-full">
      <Link to={"/"}>
        <LogoIcon className="w-8 h-8 text-black dark:text-white" />
      </Link>
      <MenuResponsive view={view} setView={setView} />

      <div className="hidden md:flex gap-4 items-center">
        <Link
          to="/front-end"
          className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
            pathname === "/front-end"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "hover:bg-black/15 hover:text-black dark:hover:bg-white/5 dark:hover:text-white dark:text-white"
          }`}
        >
          Front-End
        </Link>
        <Link
          to="/back-end"
          className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
            pathname === "/back-end"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "hover:bg-black/15 hover:text-black dark:hover:bg-white/5 dark:hover:text-white dark:text-white"
          }`}
        >
          Back-End
        </Link>
        <Link
          to="/extensions"
          className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
            pathname === "/extensions"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "hover:bg-black/15 hover:text-black dark:hover:bg-white/5 dark:hover:text-white dark:text-white"
          }`}
        >
          Extensiones
        </Link>
        <Link
          to="/courses"
          className={`font-semibold text-sm text-black px-4 py-2 transition-all ${
            pathname === "/courses"
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "hover:bg-black/15 hover:text-black dark:hover:bg-white/5 dark:hover:text-white dark:text-white"
          }`}
        >
          Cursos
        </Link>
        <SearchBar />
      </div>
      <div className="flex items-center gap-4 md:hidden">
          <SearchBar />
        <button
          className="md:hidden font-bold text-3xl text-black"
          onClick={() => setView(!view)}
        >
          <MenuIcon className="w-8 h-8 text-black dark:text-white" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
