import { link } from "fs";
import Image from "next/image";
import { title } from "process";
const MyWork = () => {
  const works = [
    {
      title: "FutureGenius",
      src: "./FutureGenuis.png",
      discription:
        "Empowering careers in innovative fend jobs. Join us to shape the future of work!.",
      link: "https://1u6urta.github.io/FutureGenius/",
    },
    {
      title: "StockIn",
      src: "./StockIn.png",
      discription: "Streamline food product inventory management effortlessly.",
      link: "https://1u6urta.github.io/StockIn/",
    },
  ];
  return (
    <section className="works section" id="works">
      <h1 className="title"> MY <span className="title" >WORKS</span></h1>
      <div className="container">
        {works.map((work, index) => (
          <div className="projet" key={index}>
            <div className="prosjet-wrapper">
              <figure>
                <Image
                  src={work.src}
                  className="img"
                  width={100}
                  height={100}
                  alt=""
                ></Image>
              </figure>
              <div className="projet-body">
                <h2>{work.title}</h2>
                <p>{work.discription}</p>
                <a href={work.link} target="_blank" className="read-more">
                  Viste Work{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
