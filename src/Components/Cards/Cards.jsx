import { useEffect, useState } from "react";
import Card from "../Card/Card";

function Cards({ items }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

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
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="grid md:grid-cols-4 gap-4">
        {currentItems?.map((c, index) => (
          <Card article={c} key={index} />
        ))}
      </div>

      {items.length / itemsPerPage > 1 && ( // Si solo hay una pagina para mostrar, no renderiza las demas paginas
        <ul className="flex flex-wrap h-fit justify-center max-w-fit relative gap-2 items-center overflow-visible rounded-md">
          {[...Array(Math.ceil(items.length / itemsPerPage))].map((e, i) => (
            <li
              onClick={() => {
                paginate(i + 1);
                window.scrollTo(0, 0);
              }}
              key={i}
              className={`select-none cursor-pointer flex flex-wrap box-border items-center justify-center shadow-sm min-w-9 w-9 h-9 text-sm rounded-md ${
                currentPage == i + 1
                  ? "bg-blue-600 text-white"
                  : "text-black dark:text-white hover:bg-black/10 hover:dark:bg-white/10 transition-all"
              }`}
            >
              {i + 1}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cards;
