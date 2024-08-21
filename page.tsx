"use client"
import Navbar from "@/_Components/navbar";
import { useState } from 'react';
import Home from '@/_Components/home';
import AboutMe from "@/_Components/aboutMe";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <AboutMe isDarkMode={isDarkMode} ></AboutMe>
    </>
  );
};

export default Index;
