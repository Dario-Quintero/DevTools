import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex justify-evenly w-full text-black bg-white h-8 font-semibold items-center fixed bottom-0">
      <Link
        to="https://darioquintero.vercel.app/"
        target="_blank"
        className="hover:bg-sky-100 px-2 py-1"
      >
        Dario-Quintero
      </Link>
      <p>DevTools</p>
      <Link
        to="https://porfolio-rafael.vercel.app/"
        target="_blank"
        className="hover:bg-sky-100 px-2 py-1"
      >
        RDG-Sanchez
      </Link>
    </footer>
  );
}

export default Footer;
