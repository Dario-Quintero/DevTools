import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="bg-rose-800">
      <p>Error 404 Cobayo Not Found</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyTr2ArnymLPdxjjUBg1oqAXwQdCVVHLD8A&s"
        alt=""
      />
      <Link to="/">Volver al home</Link>
    </div>
  );
}

export default NoPage;
