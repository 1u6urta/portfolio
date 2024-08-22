import "@/_Components/componentsStyle.css";

import Image from "next/image";
import Link from "next/link";

import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

import { useState, useEffect } from "react";
import { MenuIcon } from "./MenuIcon";
import { CloseIcon } from "./CloseIcon";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const navLinks = document.querySelector(".navLinks");
      if (isOpenMenu) {
        navLinks?.classList.add("openMenu");
      } else {
        navLinks?.classList.remove("openMenu");
      }
    }
  }, [isOpenMenu]);

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="logoNavbar">
          <Image
            src={isDarkMode ?  "./favicon.png" : "./dark.png"}
            width={60}
            height={60}
            alt="LOGO"
          />
          <div className="textLogo">
            <p>JuGurta</p>
            <p>HADJAM</p>
          </div>
        </Link>
        <ul className="navLinks">
          <li>
            <Link className="navLink" onClick={() => setIsOpenMenu(!isOpenMenu)} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" onClick={() => setIsOpenMenu(!isOpenMenu)} href="/#about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="navLink" onClick={() => setIsOpenMenu(!isOpenMenu)} href="/#skills">
              My Skills
            </Link>
          </li>
          <li>
            <Link className="navLink" onClick={() => setIsOpenMenu(!isOpenMenu)} href="/#work">
              My Work
            </Link>
          </li>
          <li>
            <Link className="navLink" onClick={() => setIsOpenMenu(!isOpenMenu)} href="/#contact">
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="buttonsNavBar">
          <Switch
            defaultSelected
            size="md"
            color="secondary"
            onClick={() => setIsDarkMode(!isDarkMode)}
            thumbIcon={({ isSelected }: { isSelected: any }) =>
              isSelected ? <MoonIcon />  : <SunIcon />
            }
          ></Switch>
          <button className="Menu" onClick={() => setIsOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
