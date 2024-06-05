import { useLocation } from "react-router-dom";

function Frontend() {
  const { pathname } = useLocation();
  return <div>{pathname === "/" ? "Front-end en /" :`Front-end en ${pathname}`}</div>;
}

export default Frontend;
