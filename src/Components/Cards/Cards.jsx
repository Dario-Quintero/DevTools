import { useEffect, useState } from "react";
import Card from "../Card/Card";

function Cards({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Obtener los items actuales a mostrar
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  
  // Cambiar la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Al cambiar los items de entrada, ya que este componente es reutilizable, muestra la primer pagina
  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return (
    <div className="flex flex-col items-center gap-4 pb-16">
      <div className="flex gap-4 flex-wrap justify-center">
        {currentItems?.map((c, index) => (
          <Card article={c} key={index} />
        ))}
      </div>
      {items.length / itemsPerPage > 1 && ( // Si solo hay una pagina para mostrar, no renderiza las demas paginas
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
      )}
    </div>
  );
}

export default Cards;
