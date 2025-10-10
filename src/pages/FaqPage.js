import React from 'react';
import FaqSection from '../components/FaqSection'; // Импортируем компонент секции
import BookDemoSectionFaq from '../components/BookDemoSectionFaq'; // Импортируем компонент секции

const FaqPage = () => {
  return (
    <>
      <FaqSection />
      <BookDemoSectionFaq />
    </>
  );
};

export default FaqPage;