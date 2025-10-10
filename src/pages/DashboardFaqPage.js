import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import AccordionFaq from '../components/dashboard/AccordionFaq';
import ContactForm from '../components/dashboard/ContactForm';

const DashboardFaqPage = () => {
  return (
    <DashboardLayout currentPage="FAQ">
      <AccordionFaq />
      <ContactForm />
    </DashboardLayout>
  );
};

export default DashboardFaqPage;