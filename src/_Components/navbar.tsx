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
    // Access localStorage and document only in the browser environment
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("theme");
      if (savedMode) {
        setIsDarkMode(savedMode === "dark");
      }
    }
  }, [setIsDarkMode]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
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
            src={isDarkMode ? "/dark.png" : "/favicon.png"}
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
            <Link className="navLink" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" href="/#about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="navLink" href="/#skills">
              My Skills
            </Link>
          </li>
          <li>
            <Link className="navLink" href="/#work">
              My Work
            </Link>
          </li>
          <li>
            <Link className="navLink" href="/#contact">
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="buttonsNavBar">
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            onClick={() => setIsDarkMode(!isDarkMode)}
            thumbIcon={({ isSelected }: { isSelected: any }) =>
              isSelected ? <SunIcon /> : <MoonIcon />
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
