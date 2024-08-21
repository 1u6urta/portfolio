import Image from "next/image";
const AboutMe = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className="section about" id="about">
      <div className="boxabout">
        <Image
          className="ImageAbout"
          src="/about.jpg"
          width={400}
          height={600}
          alt=""
        ></Image>
        <div className="aboutText">
          <h1 className="aboutMe">
            So, Who <span className="aboutMe">I'am</span>
          </h1>
          <p>
            I'm Jugurta Hadjam, a front-end web developer with a passion for
            creating visually stunning and user-friendly websites. With a strong
            foundation in HTML, CSS, JavaScript, and experience in frameworks
            like React and Next.js, I bring creativity and technical expertise
            to every project I work on. My focus is on delivering exceptional
            digital experiences by translating design concepts into responsive,
            performant code. I have worked on various projects, from building
            portfolio websites to optimizing complex web applications. I'm
            constantly evolving my skill set and staying updated on the latest
            web development trends. When I'm not coding, you can find me
            exploring design trends, learning new languages, or contributing to
            open-source projects. Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
