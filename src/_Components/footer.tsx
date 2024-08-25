import "@/_Components/componentsStyle.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="background">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
        >
          <defs>
            <linearGradient id="bg">
              <stop
                offset="0%"
                style={{ stopColor: "rgba(41 , 70 ,127,0.06 )" }}
              ></stop>
              <stop
                offset="0%"
                style={{ stopColor: "rgba(53,127,242,0.6)" }}
              ></stop>
            </linearGradient>
            <path
              id="wave"
              fill="url(#bg)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0 s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".3">
              <animateTransform
                dur="10s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0 , 0.58 , 1.0; 0.42 , 0 , 0.58 , 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                dur="8s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0 , 0.58 , 1.0; 0.42 , 0 , 0.58 , 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use  xlinkHref="#wave"opacity=".9">
              <animateTransform
                dur="6s"
                attributeName="transform"
                attributeType="XML"
                type="translate"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0 , 0.58 , 1.0; 0.42 , 0 , 0.58 , 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
      <section className="sectionFooter">
        <ul className="socials">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
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
      </section>
    </footer>
  );
};

export default Footer;
