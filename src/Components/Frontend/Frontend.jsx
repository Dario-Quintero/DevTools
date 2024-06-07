import { useState } from "react";
import Cards from "../Cards/Cards";
import { UXUI } from "../../assets/items/front-end/uxui";
import { CSS } from "../../assets/items/front-end/css";
import { PRACTICE } from "../../assets/items/front-end/practice";
import { DOCUMENTATION } from "../../assets/items/front-end/documentation";
import { DEPLOY } from "../../assets/items/front-end/deploy";

function Frontend() {
  const BUTTONS = [
    {
      name: "UX/UI",
      items: UXUI,
    },
    {
      name: "CSS",
      items: CSS,
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

  const [Component, setComponent] = useState(UXUI);
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

export default Frontend;
