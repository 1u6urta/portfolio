import Image from "next/image";
import { Icons } from "./icons";
import RandomShape from "./randomshap";

const Home = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className="home section" id="home">
      <div className="homeup">
        <div className="home-text">
          <h1 className="FullName">
            I am <span className="FullName">JuGurta HADJAM</span>
          </h1>
          <h2 className="Let">
            Let me <span className="Let">build</span> your website.
          </h2>
          <p>
            I am a skilled front-end web developer with a passion for crafting
            exceptional digital experiences...
          </p>
        </div>
        <div className="home-img">
          <Image
            className="Image"
            src="./J.JPG"
            width={200}
            height={200}
            alt=""
          />
          <div className="vector04">
          <svg
          width="250"
          height="250"
          viewBox="0 0 34 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13.4256"
            cy="13.3928"
            r="12.2783"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="1.99107"
          />
          <circle
            cx="20.7262"
            cy="26.6666"
            r="12.942"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="0.66369"
          />
        </svg>
          </div>
        </div>
      </div>
      <div className="shape">
        <RandomShape fill={isDarkMode ? "#000000" : "#FFFFFF"}></RandomShape>
      </div>
      <div className="icons">
        <Icons
          fill={isDarkMode ? "#FFFFFF" : "#000000"}
          height="50px"
          width="50px"
        />
      </div>

      <div className="vector01">
        <svg
          width="70"
          height="80"
          viewBox="0 0 70 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5253 51.8822L22.4266 13.3829L55.3172 33.4131L21.5253 51.8822Z"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="1.99107"
            stroke-linejoin="round"
          />
          <path
            d="M24.5487 66.9533L25.5038 26.1557L60.3581 47.3816L24.5487 66.9533Z"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="0.66369"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="vector02">
        <svg
          width="34"
          height="40"
          viewBox="0 0 34 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13.4256"
            cy="13.3928"
            r="12.2783"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="1.99107"
          />
          <circle
            cx="20.7262"
            cy="26.6666"
            r="12.942"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="0.66369"
          />
        </svg>
      </div>
      <div className="vector03">
        <svg
          width="34"
          height="40"
          viewBox="0 0 34 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="13.4256"
            cy="13.3928"
            r="12.2783"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="1.99107"
          />
          <circle
            cx="20.7262"
            cy="26.6666"
            r="12.942"
            stroke={isDarkMode ? "#FFFFFF" : "#000000"}
            stroke-width="0.66369"
          />
        </svg>
      </div>
    </section>
  );
};

export default Home;
