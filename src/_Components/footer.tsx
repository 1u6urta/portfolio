import "@/_Components/componentsStyle.css";
import Link from "next/link";

const Footer = ({ fill }: { fill: string }) => {
  return (
    <section className="sectionFooter">
      <ul className="links">
        <li>
          <Link href="./#">Home</Link>
        </li>
        <li>
          <Link href="./#about">About Me</Link>
        </li>
        <li>
          <Link href="./#skills">My Skills</Link>
        </li>
        <li>
          <Link href="./#works">My Work</Link>
        </li>
        <li>
          <Link href="./#contact">Contact Me</Link>
        </li>
      </ul>
      <p className="legal"> 2024 All rights reserved</p>
      <div className="background">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1920 344"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stopColor="rgba(1, 212, 255, 0.17)"
                offset="0%"
              ></stop>
              <stop id="stop2" stopColor={fill} offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            d="M0 258L80 229.333C160 200.667 320 143.333 480 150.5C640 157.667 800 229.333 960 229.333C1120 229.333 1280 157.667 1440 107.5C1600 57.3333 1760 28.6667 1840 14.3333L1920 0V344H1840C1760 344 1600 344 1440 344C1280 344 1120 344 960 344C800 344 640 344 480 344C320 344 160 344 80 344H0V258Z"
            fill="url(#sw-gradient)"
            width="100%"
            height="100%"
            stroke="url(#sw-gradient)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Footer;
