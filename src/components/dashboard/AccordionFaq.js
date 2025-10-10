import React, { useState } from 'react';
import styles from './AccordionFaq.module.css';

const faqData = [
{ question: "How long until we deliver your first blog post?", answer: "We typically deliver your first blog post within 3-5 business days after receiving all necessary information and content requirements. The timeline may vary depending on the complexity of the topic and the depth of research required." },
{ question: "What is your process for creating content?", answer: "Our content creation process involves four key stages: research and planning, outline development, content writing, and quality assurance. We collaborate closely with you to ensure the content aligns with your brand voice and business objectives." },
{ question: "Can I request revisions to the content?", answer: "Yes, we offer up to three rounds of revisions for all content pieces. Revisions must be requested within 14 days of delivery and should include specific feedback to help us better meet your expectations." },
{ question: "Do you provide SEO optimization for the content?", answer: "Absolutely. All our content includes basic SEO optimization with keyword research, meta descriptions, and SEO-friendly structure. For advanced SEO services, we offer additional packages that include backlink strategies and comprehensive SEO audits." },
{ question: "What topics or industries do you specialize in?", answer: "We have expertise across various industries including technology, healthcare, finance, e-commerce, and education. Our team includes writers with specialized knowledge in these fields to ensure accurate and authoritative content." },
{ question: "How do you ensure content originality and avoid plagiarism?", answer: "We use advanced plagiarism detection tools and maintain a strict zero-plagiarism policy. All content is originally written by our team and goes through multiple quality checks before delivery to ensure uniqueness and authenticity." },
];

const AccordionFaq = () => {
  const [openIndex, setOpenIndex] = useState(0); // El primero está abierto por defecto

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2 className={styles.title}>Frequently Asked Questions (FAQ)</h2>
      <div className={styles.grid}>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
              onClick={() => handleToggle(index)}
            >
              <div className={styles.question}>
                <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                <span>{item.question}</span>
              </div>
              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionFaq;