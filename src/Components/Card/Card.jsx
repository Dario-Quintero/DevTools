import LinkIcon from "../icons/LinkIcon";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  return (
    <div className="text-black bg-white dark:bg-black border dark:border-white/20 rounded-lg w-72 mt-2 overflow-hidden">
      <div className="w-full h-[40%]">
        <img
          className="object-fit object-cover w-full h-full hover:scale-[105%] transition-all"
          src={article?.media}
          alt={article?.name}
        />
      </div>
      <div className="h-[60%] px-4 py-4 flex flex-col justify-between">
        <div>
          <h1 className="text-black font-semibold text-xl dark:text-white">
            {article?.name}
          </h1>
          <span className="text-xs dark:text-white/70">{`${article?.tags[0]?.toUpperCase()}`}</span>
          <p className="dark:text-white/90">{article?.description}</p>
        </div>
        <Link
          to={article?.url}
          target="_blank"
          className="w-[50%] flex gap-2 items-center px-4 py-2 mt-2 border dark:border-white/20 rounded-md text-black dark:text-white hover:bg-black/5 hover:animate-pulse transition-all"
        >
          <LinkIcon className="w-5 h-5" />
          Ir al sitio
        </Link>
      </div>
    </div>
  );
};

export default Card;
