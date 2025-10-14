"use client";

import { navItems } from "@/lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  navShow: boolean;
  closeNav: () => void;
};

const MobileNav = ({ navShow, closeNav: toggleNav }: Props) => {
  const [activeSection, setActiveSection] = useState("#home");

  // Update active section based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home");
    };

    // Set initial value
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navOpen = navShow
    ? "opacity-100 translate-x-0"
    : "opacity-0 translate-x-full";

  const getLinkClass = (href: string) => {
    const isActive = activeSection === href;

    if (isActive) {
      return "underline decoration-terciar decoration-3 underline-offset-12 text-accent-foreground";
    }

    return "nav-link hover:text-terciar transition-colors duration-300";
  };

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    toggleNav();
  };

  return (
    <div className="relative">
      {/* OVERLAY */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black/70 w-full h-screen`}
        onClick={toggleNav}
      >
        <div
          className={`text-foreground ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300  w-[85%] md:w-[60%] lg:w-[40%] space-y-6 z-50 bg-background opacity-100`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* NAV LINKS */}
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block"
              >
                <p
                  className={`text-5xl ml-10 sm:ml-20 sm:text-6xl ${getLinkClass(
                    item.href
                  )}`}
                >
                  {item.name}
                </p>
              </Link>
            </div>
          ))}

          {/* CLOSE BUTTON */}
          <CgClose
            className="absolute top-6 right-[1.5rem] text-3xl cursor-pointer text-foreground w-8 h-8 sm:h-10 sm:w-10 hover:text-terciar transition-colors duration-300"
            onClick={toggleNav}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
