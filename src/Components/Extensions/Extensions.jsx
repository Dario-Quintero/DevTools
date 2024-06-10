import Cards from "../Cards/Cards";
import { EXTENSIONS } from "../../assets/items/extensions/extensions";

function Extensions() {
  return (
    <div className="bg-white dark:bg-black w-screen h-screen md:min-h-screen">
      <Cards items={EXTENSIONS} />
    </div>
  );
}

export default Extensions;
