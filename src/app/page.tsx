"use client"
import Navbar from "@/_Components/navbar";
import { useEffect, useState } from 'react';
import Home from '@/_Components/home';
import AboutMe from "@/_Components/aboutMe";
import MySkills from "@/_Components/mySkills";
import Footer from "@/_Components/footer";
import MyWork from "@/_Components/mywork";
import ContactMe from "@/_Components/contactMe";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <AboutMe isDarkMode={isDarkMode} fill={isDarkMode ? "#000000" : "#FFFFFF" } height="32px" width="32px" ></AboutMe>
      <MySkills isDarkMode={isDarkMode} fill={isDarkMode ? "#FFFFFF" : "#000000" } height="32px" width="32px"></MySkills>
      <MyWork></MyWork>
      <ContactMe fill={isDarkMode ? "#FFFFFF" : "#000000" } ></ContactMe>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Index;
