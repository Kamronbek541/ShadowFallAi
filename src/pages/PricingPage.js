import React from 'react';
// ИЗМЕНЕНИЕ: Путь теперь начинается с '../'
import PricingPackages from '../components/PricingPackages';
import ComparePlansTable from '../components/ComparePlansTable'; 
// import BookDemoSection from '../components/BookDemoSection';
import GrowthFormSection from '../components/GrowthFormSection';


const PricingPage = () => {
  return (
    <>
      <PricingPackages />
       <ComparePlansTable /> {/* 2. Добавляем компонент */}
      {/* Здесь будут остальные секции этой страницы */}
      <GrowthFormSection/>
    </>
  );
};

export default PricingPage;