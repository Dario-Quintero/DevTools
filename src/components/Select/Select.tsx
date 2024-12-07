import { Select as NextUISelect, SelectItem } from "@nextui-org/react";

const Select = () => {
  const options = [
    { name: "UX/UI" },
    { name: "Utilidades" },
    { name: "Deployment" },
    { name: "Practicas" },
    { name: "Documentación" },
  ];

  return (
    <NextUISelect label="Seleccione una categoria" className="max-w-xs">
      {options.map((item, index) => (
        <SelectItem value={item.name} key={index}>
          {item.name}
        </SelectItem>
      ))}
    </NextUISelect>
  );
};

export default Select;
