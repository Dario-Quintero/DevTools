import React from "react";
import { useState } from "react";
import Cards from "../../components/Cards/Cards";
import { PLATFORMS } from "../../assets/items/courses/platforms";
import { VIDEOS } from "../../assets/items/courses/videos"
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
  const [Button, setButton] = useState("Plataformas");

  const handleComponent = (c) => {
    setComponent(c.items);
  };

  const handleButton = (c) => {
    setButton(c.name);
  };

  return (
    <div>
      <div className="flex justify-center gap-2 w-full flex-wrap px-10">
        {BUTTONS.map((b, index) => (
          <button
            key={index}
            className={`px-4 py-2 border border-white/20 rounded-md transition-all text-black text-sm ${
              Button === b.name
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "hover:bg-black/15 hover:text-white dark:hover:bg-white/5 dark:text-white"
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

export default Courses;
