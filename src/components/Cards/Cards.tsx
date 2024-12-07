import { useState } from "react";

import { Card } from "@components/Card/Card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@components/ui/pagination";

import { Page } from "types/types";

const Cards = ({ items }: { items: Page[] }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const pagesToMap = Array.from(
    { length: Math.round(items.length / itemsPerPage) },
    (_, index) => index + 1
  );

  const handleNext = () => {
    if (currentPage === Math.round(items.length / itemsPerPage)) return;
    else setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage === 1) return;
    else setCurrentPage(currentPage - 1);
  };

  return (
    <section className="flex flex-col items-center w-full h-full px-6 gap-4">
      <div className="w-full h-full flex flex-row justify-center flex-wrap gap-4">
        {items
          .map((item, index) => <Card item={item} key={index} />)
          .slice(indexOfFirstItem, indexOfLastItem)}
      </div>
      <Pagination className="mt-auto">
        <PaginationContent className="flex flex-wrap items-center justify-center">
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handlePrevious} />
          </PaginationItem>
          {pagesToMap.map((item) => (
            <PaginationItem>
              <PaginationLink
                isActive={currentPage === item}
                href="#"
                onClick={() => setCurrentPage(item)}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext href="#" onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Cards;
