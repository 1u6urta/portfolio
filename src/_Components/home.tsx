import Image from 'next/image';
import { Icons } from './icons'; 
import RandomShape from './randomshap';

const Home = ({ isDarkMode  } : {isDarkMode : boolean}) => {
  return (
    <section className="home section" id="home">
      <div className='homeup'>
      <div className="home-text">
        <h1 className="FullName">
          I am <span className="FullName">JuGurta HADJAM</span>
        </h1>
        <h2 className="Let">
          Let me <span className="Let">build</span> your website.
        </h2>
        <p>
          I am a skilled front-end web developer with a passion for crafting exceptional digital experiences...
        </p>
      </div>
      <div className="home-img">
        <Image className="Image" src="/j.jpg" width={200} height={200} alt="" />
      </div>
      </div>
      <div className="shape">
          <RandomShape fill={isDarkMode ? "#FFFFFF" : "#000000" }></RandomShape>
      </div>
      <div className="icons">
          <Icons fill={isDarkMode ? "#000000" : "#FFFFFF" } height="50px" width="50px" />
      </div>
    </section>
  );
};

export default Home;
