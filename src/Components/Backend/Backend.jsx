import { useState } from "react";
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
    <div className="bg-white dark:bg-black w-screen h-screen md:min-h-screen">
      <div className="flex justify-center gap-2 w-full flex-wrap px-10">
        {BUTTONS.map((b, index) => (
          <button
            key={index}
            className={`px-4 py-2 border dark:border-white/20 rounded-md transition-all text-black text-sm ${
              Button === b.name
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "hover:bg-slate-400/5 hover:text-black dark:hover:bg-white/5 dark:text-white"
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
