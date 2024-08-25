import Image from "next/image";
const AboutMe = ({
  isDarkMode,
  fill,
  width,
  height,
}: {
  isDarkMode: boolean;
  fill: string;
  width: string;
  height: string;
}) => {
  return (
    <section className="about-me" id="about">
      <div className="container">
        <div className="about-me-container">
          <div className="about-me-title">So, Who I&apos;am</div>

          <div className="about-me-flex-container">
            <div className="about-me-image">
              <div className="back-div"></div>
              <div className="black-image">
                <Image
                  src="./Jabout.jpg"
                  width={100}
                  height={100}
                  className="img"
                  alt="black"
                />
              </div>
              <div className="main-image">
                <Image
                  src="./Jabout.jpg"
                  width={100}
                  height={100}
                  className="img"
                  alt="smit"
                />
              </div>
            </div>
            <div className="about-me-content">
              <div className="logo">
                <Image
                  src={isDarkMode ? "./favicon.png" : "./dark.png"}
                  width={32}
                  height={32}
                  className="img"
                  alt="smit"
                />
              </div>

              <div className="text">
                I&apos;m Jugurta Hadjam, a front-end web developer with a
                passion for creating visually stunning and user-friendly
                websites. With a strong foundation in HTML, CSS, JavaScript, and
                experience in frameworks like React and Next.js, I bring
                creativity and technical expertise to every project I work on.
                My focus is on delivering exceptional digital experiences by
                translating design concepts into responsive, performant code. I
                have worked on various projects, from building portfolio
                websites to optimizing complex web applications. I&apos;m
                constantly evolving my skill set and staying updated on the
                latest web development trends. When I&apos;m not coding, you can
                find me exploring design trends, learning new languages, or
                contributing to open-source projects. Let&apos;s create
                something amazing together!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
