import Cards from "../Cards/Cards";
import { ITEMS } from "../../assets/items/items";

function Home() {
  const items = ITEMS.sort((a, b) => a.name.localeCompare(b.name));

  const uniqueItems = items.filter(
    (item, index, self) => index === self.findIndex((t) => t.url === item.url)
  );

  return (
    <div className="flex flex-col items-center gap-5 bg-white dark:bg-black mx-10">
      <Cards items={uniqueItems} />
    </div>
  );
}

export default Home;
