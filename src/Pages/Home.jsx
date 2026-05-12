import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import SkillsSection from '../Components/SkillsSection';
import ExperienceSection from '../Components/ExperienceSection';
import InfiniteMarquee from '../Components/InfiniteMarquee';
import ReverseSkillsMarquee from '../Components/ReverseSkillsMarquee';
import SkillsMarquee from '../Components/SkillsMarquee';
import ParallaxCutout from '../Components/ParallaxCutout';
import HireMeSection from '../Components/HireMeSection';

function Home() {
  return (
    <main className="bg-[#fce4ec]">
      <HeroSection className="h-[80vh]" />
      <SkillsMarquee className="pb-20" />
      <ReverseSkillsMarquee />
      <AboutMe />
      <SkillsSection />
      <ExperienceSection />
      <InfiniteMarquee />
      <ParallaxCutout />
      
      <HireMeSection />


    </main>
  );
}
export default Home;