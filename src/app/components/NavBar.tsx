"use client";

import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const NavBar = ({ openNav }: Props) => {
  return (
    <div className="fixed w-full h-[8vh] shadow-md backdrop-blur-2xl bg-background/40 transition-all  duration-200">
      <div className="container flex items-center h-full justify-between c-space mx-auto">
        {/* LOGO */}
        <h1 className="text-4xl font-semibold md:text-4xl text-terciar">
          Portfólio
        </h1>
        {/* MOBILE ICON */}
        <div className="flex flex-row gap-6 justify-center">
          {/* <ModeToggle /> */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-10 h-10 cursor-pointer dark:text-accent-foreground hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
