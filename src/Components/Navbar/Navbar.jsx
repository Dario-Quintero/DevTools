import LogoIcon from "../icons/LogoIcon";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center gap-10 p-4 bg-white">
      <Link to={"/"}>
        <LogoIcon className="w-8 h-8 text-black" />
      </Link>

      <div className="flex">
        <Link
          className="font-semibold text-black hover:bg-sky-100 px-4 py-2 transition-all"
          to="/front-end"
        >
          Front-End
        </Link>
        <Link
          className="font-semibold text-black hover:bg-sky-100 px-4 py-2 transition-all"
          to="/back-end"
        >
          Back-End
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
