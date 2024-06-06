import { useState } from "react";
import LogoIcon from "../icons/LogoIcon";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center gap-10 p-4 bg-white">
      <Link to={"/"}>
        <LogoIcon className="w-8 h-8 text-black" />
      </Link>

      <div className="flex gap-4">
        <Link
          to="/front-end"
          className={`font-semibold text-black px-4 py-2 transition-all ${
            pathname === "/front-end"
              ? "bg-black text-white "
              : "hover:bg-black/15 hover:text-black"
          }`}
        >
          Front-End
        </Link>
        <Link
          to="/back-end"
          className={`font-semibold text-black  px-4 py-2 transition-all ${
            pathname === "/back-end"
              ? "bg-black text-white "
              : "hover:bg-black/15 hover:text-black"
          }`}
        >
          Back-End
        </Link>
        <Link
          to="/extension"
          className={`font-semibold text-black  px-4 py-2 transition-all ${
            pathname === "/extension"
              ? "bg-black text-white "
              : "hover:bg-black/15 hover:text-black"
          }`}
        >
          Extensiones
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
