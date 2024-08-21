"use client"
import Navbar from "@/_Components/navbar";
import { useState } from 'react';
import Home from '@/_Components/home';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Home isDarkMode={isDarkMode} />
    </>
  );
};

export default Index;
