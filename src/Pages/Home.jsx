import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import SkillsSection from '../Components/SkillsSection';
import ExperienceSection from '../Components/ExperienceSection';
import InfiniteMarquee from '../Components/InfiniteMarquee';
import ReverseSkillsMarquee from '../Components/ReverseSkillsMarquee';
import SkillsMarquee from '../Components/SkillsMarquee';
import ParallaxCutout from '../Components/ParallaxCutout';

function Home() {
  return (
    <main className="bg-[#fce4ec]">
      <HeroSection className="h-[80vh]" />
      <AboutMe />
      <SkillsSection />
      <ExperienceSection />
      <InfiniteMarquee />
            <ParallaxCutout />
      <SkillsMarquee className="pb-20" />
      <ReverseSkillsMarquee />
      
    </main>
  );
}
export default Home;