import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../Cards/Cards";
import { PRACTICE } from "../../assets/items/front-end/practice";
import { DOCUMENTATION } from "../../assets/items/back-end/documentation";
import { DATABASE } from "../../assets/items/back-end/database";


function Backend() {
  const BUTTONS = [
    {
      name: "Documentacion",
      items: DOCUMENTATION,
    },
    {
      name: "Bases de datos",
      items: DATABASE,
    },
    {
      name: "Practica",
      items: PRACTICE,
    },
  ];

  const [Component, setComponent] = useState(DOCUMENTATION);
  const [Button, setButton] = useState("UX/UI");

  const handleComponent = (c) => {
    setComponent(c.items);
  };

  const handleButton = (c) => {
    setButton(c.name);
  };

  return (
    <div>
      <div className="flex justify-center gap-2 w-full ">
        {BUTTONS.map((b, index) => (
          <button key={index}
            className={`px-4 py-2 border rounded-md  transition-all  text-black font-normal  ${
              Button === b.name
                ? "bg-black text-white hover:bg-white hover:text-black "
                : "hover:text-white hover:bg-black"
            }`}
            onClick={() => {
              handleComponent(b);
              handleButton(b);
            }}
          >
            <span>{b.name}</span>
          </button>
        ))}
      </div>
      <Cards items={Component} />
    </div>
  );
}

export default Backend


