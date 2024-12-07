import { useState } from "react";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();

  return <></>;
};

export default Navbar;
