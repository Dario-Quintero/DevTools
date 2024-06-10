import React, { useEffect, useState } from "react";
import SearchIcon from "../../icons/SearchIcon";
import { useNavigate } from "react-router-dom";
import { ITEMS, TAGS } from "../../../assets/items/items";

function SearchBar() {
  const [input, setInput] = useState("");
  const [placeholder, setPlaceholder] = useState("deploy");
  const [focus, setFocus] = useState(false)
  const navigate = useNavigate();

  let filteredTags = TAGS.filter((tag) =>
    tag.toLowerCase().includes(input.toLowerCase())
  );

  const handleChange = (e) => {
    setInput(e.target.value);
    setFocus(true)
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
      setPlaceholder("deploy");
    }, 5000);
  }, [placeholder]);

  return (
    <form className="flex flex-col relative" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex gap-2 items-center px-4 py-2  border-2 border-black/20 dark:border-white/20 outline-none focus:border-black dark:focus:border-white transition-all">
        <SearchIcon className="w-6 h-6 text-black/50 dark:text-white/50" />
        <input
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
          placeholder={placeholder}
          className="w-40 text-black dark:text-white bg-transparent outline-none"
          onBlur={() => setFocus(false)}
        />
      </div>

      {placeholder != "deploy" ? (
        <p className="absolute bg-white w-full mt-11 p-1 text-red-600">
          {placeholder}
        </p>
      ) : (
        focus && (
          <ul className="absolute max-h-52 overflow-auto w-full flex flex-col gap-2 bg-white text-black/80 mt-11 p-1 z-99 rounded-bl-lg rounded-br-lg shadow-xl">
            {filteredTags.length === 0 ? (
              <li>No hay coincidencias.</li>
            ) : (
              filteredTags.map((tag, index) => (
                <li key={index}>{tag.toLowerCase()}</li>
              ))
            )}
          </ul>
        )
      )}
    </form>
  );
}

export default SearchBar;
