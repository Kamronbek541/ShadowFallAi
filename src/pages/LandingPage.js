import React from 'react';
// ИЗМЕНЕНИЕ: Все пути теперь начинаются с '../'
import HeroSection from '../components/HeroSection';
import SolutionSection from '../components/SolutionSection';
import GrowthFormSection from '../components/GrowthFormSection';
import PoweredSection from '../components/PoweredSection';
import PackagesSection from '../components/PackagesSection';
import SeoSection from '../components/SeoSection';
// import CtaSection from '../components/CtaSection';

// const LandingPage = () => {
//   return (
//     <>
//       <HeroSection />
//       <SolutionSection />
//       <GrowthFormSection />
//       <PoweredSection />
//       <PackagesSection />
//       <SeoSection />
//       {/* <CtaSection /> */}
//     </>
//   );
// };


const LandingPage = () => {
  return (
    <>
      {/* About Us пока не имеет своей секции, можно привязать к Hero */}
      <div id="about"><HeroSection /></div>
      <div id="features"><SolutionSection /></div>
      <div id="growthForm"><GrowthFormSection /></div>
      <div id="benefits"><PoweredSection /></div>
      <div id="pricing-section"><PackagesSection /></div> {/* Используем pricing-section, т.к. /pricing - это страница */}
      <SeoSection />
    </>
  );
};

export default LandingPage;