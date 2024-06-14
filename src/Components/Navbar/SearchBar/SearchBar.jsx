import React, { useEffect, useState } from "react";
import SearchIcon from "../../icons/SearchIcon";
import { useNavigate } from "react-router-dom";
import { ITEMS, TAGS } from "../../../assets/items/items";

function SearchBar() {
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Buscar por tags");
  const [focus, setFocus] = useState(false);
  const navigate = useNavigate();

  let filteredTags = TAGS.filter((tag) =>
    tag.toLowerCase().includes(input.toLowerCase())
  );

  const handleChange = (e) => {
    setInput(e.target.value);
    setFocus(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputTags = input.split(" ");

    const matchItems = ITEMS.filter((item) =>
      item.tags.some((tag) => inputTags.includes(tag))
    );

    const uniqueMatchItems = matchItems.filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.name === item.name)
    );

    if (!input) {
      setPlaceholder("Ingrese un tag");
    } else if (uniqueMatchItems.length >= 1) {
      navigate("/search", { state: { items: uniqueMatchItems } });
    } else {
      setInput("");
      setPlaceholder("Ingrese un tag valido");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setPlaceholder("Buscar por tags");
    }, 2500);
  }, [placeholder]);

  return (
    <form
      className="flex flex-col relative w-full md:w-56"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex gap-2 items-center px-4 py-2 outline-none transition-all bg-black/5 dark:bg-white/5 rounded-lg">
        <SearchIcon className="w-6 h-6 text-black/50 dark:text-white/50" />
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          className="w-full md:w-40 text-black dark:text-white bg-transparent outline-none"
          onBlur={() => setFocus(false)}
        />
      </div>

      {placeholder != "Buscar por tags" ? (
        <span className="absolute max-h-52 overflow-auto w-full flex flex-col gap-3 bg-black/5 dark:bg-white/5 text-red-500 mt-11 p-4 z-99 rounded-lg backdrop-blur-md">
          {placeholder}
        </span>
      ) : (
        focus && (
          <ul className="absolute max-h-52 overflow-auto w-full flex flex-col gap-3 bg-black/5 dark:bg-white/5 text-black dark:text-black dark:text-white/80 mt-11 p-4 z-99 rounded-lg backdrop-blur-md">
            {filteredTags.length === 0 ? (
              <li>No hay coincidencias.</li>
            ) : (
              filteredTags.map((tag, index) => <li key={index}>{tag}</li>)
            )}
          </ul>
        )
      )}
    </form>
  );
}

export default SearchBar;

// focus && (
//   <datalist id="tags-list" className="absolute max-h-52 overflow-auto w-full flex flex-col gap-2 bg-white text-black/80 mt-11 p-1 z-99 rounded-bl-lg rounded-br-lg shadow-xl">
//     {filteredTags.length === 0 ? (
//       <option value="No hay coincidencias." />
//     ) : (
//       filteredTags.map((tag, index) => (
//         <option key={index} value={tag.toLowerCase()} />
//       ))
//     )}
//   </datalist>
// )
