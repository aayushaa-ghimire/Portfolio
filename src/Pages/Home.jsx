import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import SkillsMarquee from '../Components/SkillsMarquee';

function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsMarquee/>
      <AboutMe />
    </main>
  );
}

export default Home;