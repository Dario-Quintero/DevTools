import LinkIcon from "../icons/LinkIcon";
import { Link } from "react-router-dom";

const Card = ({ article }) => {
  return (
    <div className="text-black border rounded-lg w-72 my-10 overflow-hidden">
      <div className="w-full h-[40%]">
        <img
          className="object-fit object-cover w-full h-full hover:scale-[105%] transition-all"
          src={article.media}
          alt={article.name}
        />
      </div>
      <div className="h-[60%] px-4 py-4 flex flex-col justify-between">
        <div>
          <h1 className="text-black font-semibold text-xl">{article.name}</h1>
          <span className="text-xs">{`${article.tags[0].toUpperCase()}`}</span>
        </div>
        <p className="">{article.description}</p>
        <Link
          to={article.url}
          target="_blank"
          className="w-[50%] flex gap-2 items-center px-4 py-2 border rounded-md text-black hover:bg-black/5 hover:animate-pulse transition-all"
        >
          <LinkIcon className="w-5 h-5" />
          Ir al sitio
        </Link>
      </div>
    </div>
  );
};

// {
//     name: "SVGL",
//     url: "https://svgl.app/",
//     description:
//       "All the svg needed to create a good design",
//     media: "",
//   },
export default Card;
