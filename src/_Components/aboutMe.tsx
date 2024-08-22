import Image from "next/image";
const AboutMe = ({ isDarkMode , fill , width , height }: { isDarkMode: boolean ,fill : string , width : string , height : string }) => {
  return (
    <section className="section about" id="about">
      <div className="boxabout">
        
          <h1 className="aboutMe">
            So, Who <span className="aboutMe">I&apos;am</span>
          </h1>
            <p className="biography">
              I&apos;m Jugurta Hadjam, a front-end web developer with a passion
              for creating visually stunning and user-friendly websites. With a
              strong foundation in HTML, CSS, JavaScript, and experience in
              frameworks like React and Next.js, I bring creativity and
              technical expertise to every project I work on. My focus is on
              delivering exceptional digital experiences by translating design
              concepts into responsive, performant code. I have worked on
              various projects, from building portfolio websites to optimizing
              complex web applications. I&apos;m constantly evolving my skill
              set and staying updated on the latest web development trends. When
              I&apos;m not coding, you can find me exploring design trends,
              learning new languages, or contributing to open-source projects.
              Let&apos;s create something amazing together!
            </p>
        </div>
    </section>
  );
};

export default AboutMe;
