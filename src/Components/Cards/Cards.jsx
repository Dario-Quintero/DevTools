import { useState } from "react";
import Card from "../Card/Card";

function Cards({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Cambia esto al número de elementos que quieres por página

  // Obtener los elementos actuales a mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center gap-4 pb-16">
      <div className="flex gap-4 flex-wrap justify-center">
        {currentItems?.map((c, index) => (
          <Card article={c} key={index} />
        ))}
      </div>
      <div className="flex gap-1">
        {[...Array(Math.ceil(items.length / itemsPerPage))].map((e, i) => (
          <button
            onClick={() => {
              paginate(i + 1);
              window.scrollTo(0, 0);
            }}
            key={i}
            className={`border border-black/50 dark:border-white/50 text-center px-3 py-1 rounded-md ${
              currentPage == i + 1
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-black dark:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cards;
