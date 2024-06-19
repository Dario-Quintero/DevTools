import Cards from "../Cards/Cards";
import Select from "../Select/Select";

import { useState } from "react";
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

  const handleComponent = (c) => {
    setComponent(c.items);
  };

  return (
    <div className="flex flex-col items-center gap-5 bg-white dark:bg-black mx-10 h-full">
      <Select options={BUTTONS} handleComponent={handleComponent} />
      <Cards items={Component} />
    </div>
  );
}

export default Frontend;
