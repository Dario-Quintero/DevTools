import { useLocation } from "react-router-dom";
import Cards from "../Cards/Cards";

function Search() {
  const location = useLocation();
  const items = location.state.items;
  return (
    <div className="bg-white dark:bg-black">
      <Cards items={items} />
    </div>
  );
}

export default Search;
