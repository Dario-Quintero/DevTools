import Cards from "../Cards/Cards";
import Select from "../Select/Select";

import { useState } from "react";
import { PLATFORMS } from "../../assets/items/courses/platforms";
import { VIDEOS } from "../../assets/items/courses/videos";

function Courses() {
  const BUTTONS = [
    {
      name: "Plataformas",
      items: PLATFORMS,
    },
    {
      name: "Videos",
      items: VIDEOS,
    },
  ];

  const [Component, setComponent] = useState(PLATFORMS);

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

export default Courses;
