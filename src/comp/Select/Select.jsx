import { useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const Select = ({ options, handleComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]?.name);
  return (
    <div
      className="inline-flex cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="w-60 relative inline-flex rounded-lg bg-black/5 dark:bg-white/5">
        <div
          className="w-full rounded-lg px-4 py-2 text-black/50 dark:text-white/50"
          href=""
        >
          {!selectedOption ? "Categoria" : selectedOption}
        </div>
        <div className="relative">
          <button
            className={`text-black/70 dark:text-white/70 inline-flex h-full items-center justify-center rounded-md px-2 transition-all ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <ArrowDownIcon className="w-7 h-7" />
          </button>
        </div>
        <div
          className={`absolute top-6 right-0 z-10 mt-5 w-60 min-w-60 origin-top-right rounded-md bg-white/70 dark:bg-black/70 backdrop-blur-xl shadow-lg ${
            !isOpen ? "hidden" : ""
          }`}
        >
          {options?.map((option) => (
            <div
              className="block rounded-lg px-4 py-2 text-sm text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:font-medium"
              onClick={() => {
                setSelectedOption(option?.name);
                handleComponent(option);
              }}
            >
              {option?.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
