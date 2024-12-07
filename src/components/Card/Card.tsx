import { Page } from "../../types/types";

import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../ui/button";

export const Card = ({ item }: { item: Page }) => {
  return (
    <ShadcnCard className="w-full lg:w-72 lg:h-72 flex flex-col justify-between overflow-hidden">
      <CardHeader className="w-full flex flex-col">
        <figure className="w-12 h-12">
          <img
            src={item.media}
            alt={`Imagen de ${item.name}`}
            className="w-full h-full object-cover rounded-full z-0"
            loading="lazy"
          />
        </figure>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <Button className="w-full">Visitar</Button>
      </CardContent>
    </ShadcnCard>
  );
};
