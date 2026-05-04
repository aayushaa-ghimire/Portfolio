import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import SkillsMarquee from '../Components/SkillsMarquee';
import SkillsSection from '../Components/SkillsSection';
import ReverseSkillsMarquee from '../Components/ReverseSkillsMarquee';

function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsMarquee className="pb-20"/>
      <ReverseSkillsMarquee/>
      <AboutMe />
      <SkillsSection/>
    </main>
  );
}

export default Home;