import React from 'react';
import ProblemSolutionSection from '../components/ProblemSolutionSection'; // Импортируем компонент секции
import CorporateSectorSection from '../components/CorporateSectorSection'; 

const BenefitsPage = () => {
  return (
    <>
      <ProblemSolutionSection />
      <CorporateSectorSection />
      {/* Здесь могут быть другие секции этой страницы */}
    </>
  );
};

export default BenefitsPage;