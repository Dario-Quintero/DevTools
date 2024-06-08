import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-evenly w-full  text-black bg-white h-5 sm:h-8 font-semibold items-center fixed bottom-0">
      <Link
        to="https://darioquintero.vercel.app/"
        target="_blank"
        className="text-xs sm:text-md lg:text-lg hover:bg-black hover:text-white px-2 py-1"
      >
        Dario-Quintero
      </Link>
      <p className="text-xs sm:text-md lg:text-lg">DevTools</p>
      <Link
        to="https://porfolio-rafael.vercel.app/"
        target="_blank"
        className="text-xs sm:text-md lg:text-lg hover:bg-black hover:text-white px-2 py-1"
      >
        RDG-Sanchez
      </Link>
    </footer>
  );
}

export default Footer;
