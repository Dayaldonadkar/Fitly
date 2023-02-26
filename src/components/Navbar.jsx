import React, { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Link } from "react-scroll";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    windowWidth <= 767 && setHamburger(true);
    window.onresize = function () {
      if (window.innerWidth <= 767) {
        setHamburger(true);
      } else {
        setHamburger(false);
        setNav(false);
      }
    };
  }, []);

  return (
    <main className=" w-full ">
      <nav className="max_width px-4 flex justify-between items-center py-3 w-full relative">
        <div className="flex items-center">
          <img src="/favicon.ico" alt="Logo_Image" className="h-[2.5rem]" />
          <h1 className="font-bold text-4xl text-yellow_text ml-3 dark:text-black dark:text-[#E94560]">
            Fitly
          </h1>
        </div>
        {hamburger && !nav ? (
          <RiMenu3Line
            onClick={() => setNav(!nav)}
            className="cursor-pointer flex text-white text-2xl"
          />
        ) : nav ? (
          <RiCloseLine
            onClick={() => setNav(!nav)}
            className="cursor-pointer flex text-white text-3xl"
          />
        ) : (
          ""
        )}

        <ul
          className={
            nav
              ? "absolute right-5 top-[100%] flex flex-col gap-4 p-5 bg-purple_bg text-xl z-[100] "
              : "md:flex gap-10 text-xl hidden text-white"
          }
        >
          <Link
            className=""
            to="program"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            Programs
          </Link>
          <Link to="value" spy={true} smooth={true} offset={-10} duration={500}>
            Values
          </Link>
          <Link to="menu" spy={true} smooth={true} offset={-10} duration={500}>
            Menu
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-10} duration={500}>
            About Us
          </Link>
        </ul>

        {!hamburger && !nav ? (
          <button className="py-2 dark:bg-[#E94560] dark:text-white dark:border-hidden">
            Let's Talk
          </button>
        ) : (
          ""
        )}
      </nav>
    </main>
  );
};

export default Navbar;
