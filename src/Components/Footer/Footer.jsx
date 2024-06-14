function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row md:justify-between gap-2 items-center text-black bg-white dark:text-white dark:bg-black py-4 px-8 mt-auto">
      <span className="text-sm">@ 2024 - DevTools</span>
      <div className="flex flex-row gap-2 items-center">
        <span className="text-sm">Desarrollado por:</span>
        <span className="flex gap-2">
          <a
            href="https://darioquintero.vercel.app/"
            target="_blank"
            className="text-sm hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white px-1"
          >
            Dario-Quintero
          </a>
          <a
            href="https://porfolio-rafael.vercel.app/"
            target="_blank"
            className="text-sm hover:bg-black hover:text-white dark:hover:text-black dark:hover:bg-white px-1"
          >
            RDG-Sanchez
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
