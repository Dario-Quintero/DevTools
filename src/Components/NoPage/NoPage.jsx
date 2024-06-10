import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

function NoPage() {
  const media = [
    "https://images.vexels.com/media/users/3/256525/isolated/preview/2ac5fa765c0a6ea3069938219255ed40-cobaya-plana-16.png",
    "https://weloversize.com/wp-content/uploads/2022/10/first-day-of-college-back-to-school.gif",
    "https://images.squarespace-cdn.com/content/6178a208b0fd9460bbc09e2c/1636088702932-X62J0TTMECFBBJJF20XF/Tiny-Animals-Go-Back-to-School_1.gif?content-type=image%2Fgif",
  ];

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const [Cobayo, setCobayo] = useState();

  useEffect(() => {
    const cobayoSelect = getRandomInt(3);
    setCobayo(media[cobayoSelect]);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-6 py-10 text-center gap-2 dark:bg-black md:min-h-screen">
        <h1 className="font-bold text-3xl text-black dark:text-white">
          Página no encontrada
        </h1>
        <span className="text-black dark:text-white">
          Nuestro amiguito busco hasta en su madriguera, pero aun así no
          encontró nada.
        </span>
        <img className="w-72" src={Cobayo} alt="Cobayo say, not found" />
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
