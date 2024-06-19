import LinkIcon from "../icons/LinkIcon";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  return (
    <article className="flex flex-col gap-4 items-start border border-white/25 w-[20rem] h-full rounded-lg overflow-hidden relative group">
      <div className="relative w-full">
        <Link
          className="flex gap-2 absolute bg-white px-2 py-2 bg-[#0000008a] backdrop-blur-lg top-[78%] left-[32%] rounded-lg group-hover:opacity-100 opacity-0 transition-all duration-200"
          to={article.url}
          target="_blank"
        >
          <LinkIcon className="w-6 h-6" />
          Ver sitio
        </Link>
        <figure className="h-[14rem]">
          <img
            className="object-fit object-cover h-full w-full"
            src={article.media}
            alt={article.name}
          />
        </figure>
      </div>
      <body className="flex flex-col items-start justify-between gap-2 w-full h-full backdrop-blur-lg absolute bg-[#0000008a] transition-all duration-200 select-none group-hover:opacity-0 group-hover:h-[0%]">
        <div className="mx-4 my-4">
          <h1 className="text-2xl font-medium">{article.name}</h1>
          <span className="text-xs text-white/70">
            {article.tags[0].toUpperCase()}
          </span>
          <p className="text-pretty">{article.description}</p>
        </div>
      </body>
    </article>
  );
};

export default Card;
