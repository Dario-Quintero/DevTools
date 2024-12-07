import Cards from "../Cards/Cards";

import { ITEMS } from "../../assets/items/items.ts";

const Home = () => {
  const items = ITEMS.sort((a, b) => a.name.localeCompare(b.name));

  const uniqueItems = items.filter(
    (item, index, self) => index === self.findIndex((t) => t.url === item.url)
  );

  return <Cards items={uniqueItems} />;
};

export default Home;
