import Cards from "../Cards/Cards";
import { ITEMS } from "../../assets/items/items";

function Home() {
  const items = ITEMS.sort((a, b) => a.name.localeCompare(b.name));

  const uniqueItems = items.filter(
    (item, index, self) => index === self.findIndex((t) => t.url === item.url)
  );
  return (
    <div className="bg-white dark:bg-black h-full md:h-screen">
      <Cards items={uniqueItems} />
    </div>
  );
}

export default Home;