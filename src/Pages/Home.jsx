import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import SkillsMarquee from '../Components/SkillsMarquee';
import SkillsSection from '../Components/SkillsSection';
import ReverseSkillsMarquee from '../Components/ReverseSkillsMarquee';
import ExperienceSection from '../Components/ExperienceSection';

function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsMarquee className="pb-20"/>
      <ReverseSkillsMarquee/>
      <AboutMe />
      <SkillsSection/>
      <ExperienceSection/>
    </main>
  );
}

export default Home;