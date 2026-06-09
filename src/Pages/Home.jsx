
import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import SkillsSection from '../Components/SkillsSection';
import ExperienceSection from '../Components/ExperienceSection';
import InfiniteMarquee from '../Components/InfiniteMarquee';
import ReverseSkillsMarquee from '../Components/ReverseSkillsMarquee';
import SkillsMarquee from '../Components/SkillsMarquee';
import ParallaxCutout from '../Components/ParallaxCutout';
import ContactSection from '../Components/ContactSection';
import HireMe from '../Components/HireMe';

function Home() {
  return (
    <main className="bg-[#fce4ec]">
      {/* 1. Hero Section wrapper */}
      <div id="hero">
        <HeroSection className="h-[80vh]" />
      </div>
      
      <SkillsMarquee className="pb-20" />
      <ReverseSkillsMarquee />
      
      {/* 2. About Me section */}
      <div id="about">
        <AboutMe />
      </div>
      
      {/* 3. Skills Section wrapper */}
      <div id="skills">
        <SkillsSection />
      </div>
      
      <ParallaxCutout />
      
      {/* 4. Projects Section wrapper */}
      <div id="projects">
        <InfiniteMarquee />
      </div>
      
      {/* 5. Experience Section wrapper */}
      <div id="experience">
        <ExperienceSection />
      </div>
      
      <HireMe />
      
      {/* 6. Contact Section wrapper */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}

export default Home;