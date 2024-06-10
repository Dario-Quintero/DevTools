import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function NoPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-6 py-10 text-center gap-2 dark:bg-black md:min-h-screen">
        <h1 className="font-bold text-3xl text-black dark:text-white">Página no encontrada</h1>
        <span className="text-black dark:text-white">
          Nuestro amiguito busco hasta en su madriguera, pero aun así no encontró
          nada.
        </span>
        <img
          className="w-72"
          src="https://images.vexels.com/media/users/3/256525/isolated/preview/2ac5fa765c0a6ea3069938219255ed40-cobaya-plana-16.png"
          alt=""
        />
        {/* <img
          className="w-72"
          src="https://weloversize.com/wp-content/uploads/2022/10/first-day-of-college-back-to-school.gif"
          alt=""
        /> */}
        <Link
          className="flex gap-2 items-center px-4 py-2 mt-2 border border-white/20 rounded-md text-black dark:text-white hover:bg-black/5 hover:animate-pulse transition-all"
          to="/"
        >
          Volver al inicio
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NoPage;
