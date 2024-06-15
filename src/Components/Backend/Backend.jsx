import Select from "../Select/Select";
import Cards from "../Cards/Cards";

import { useState } from "react";
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

  const handleComponent = (c) => {
    setComponent(c.items);
  };

  return (
    <div className="bg-white dark:bg-black flex flex-col items-center gap-5">
      <Select options={BUTTONS} handleComponent={handleComponent} />
      <Cards items={Component} />
    </div>
  );
}

export default Backend;
