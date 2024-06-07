import { useState } from "react";
import { useLocation } from "react-router-dom";
import Cards from "../Cards/Cards";
  import { PRACTICE } from "../../assets/items/back-end/practice";
import { DOCUMENTATION } from "../../assets/items/back-end/documentation";
import { DATABASE } from "../../assets/items/back-end/database";
import { DEPLOY } from "../../assets/items/back-end/deploy";

function Backend() {
  const BUTTONS = [
    {
      name: "Bases de datos",
      items: DATABASE,
    },
    {
      name: "Deploy",
      items: DEPLOY,
    },
    {
      name: "Practica",
      items: PRACTICE,
    },
    {
      name: "Documentacion",
      items: DOCUMENTATION,
    },
  ];

  const [Component, setComponent] = useState(DATABASE);
  const [Button, setButton] = useState("Bases de datos");

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
          <button
            key={index}
            className={`px-4 py-2 border rounded-md  transition-all  text-black font-normal  ${
              Button === b.name
                ? "bg-black text-white hover:bg-white hover:text-black "
                : "hover:bg-black/15 hover:text-black"
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

export default Backend;
