"use client";

import { useState } from "react";
import MobileNav from "../components/MobileNav";
import NavBar from "../components/NavBar";

const Header = () => {
  const [navShow, setNavShow] = useState(false);
  const handleNavShow = () => {
    setNavShow(!navShow);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50" id="home">
      <NavBar openNav={handleNavShow} />
      <MobileNav navShow={navShow} closeNav={handleNavShow} />
    </header>
  );
};

export default Header;
