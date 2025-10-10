import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import styles from './DashboardPage.module.css';

// Импортируем наши виджеты
import PackageWidget from '../components/dashboard/PackageWidget';
import LinkWidget from '../components/dashboard/LinkWidget';

// Импортируем картинки
import blogPeopleImg from '../assets/blog_people.png';
import educationImg from '../assets/education_video_back.png'; // Используем существующую
import faqImg from '../assets/education_video_back.png'; // Предполагаем, что она есть

const DashboardPage = () => {
  return (
    <DashboardLayout currentPage="Dashboard">
      <div className={styles.grid}>
        {/* --- Верхний ряд --- */}
        <div className={styles.packageWidgetContainer}>
          <PackageWidget />
        </div>
        <div className={styles.blogWidgetContainer}>
          <LinkWidget 
            title="Read Blog"
            description="Wealth creation is an evolutionarily recent positive-sum game."
            link="/dashboard/blog"
            image={blogPeopleImg}
          />
        </div>

        {/* --- Нижний ряд --- */}
        <div className={styles.educationWidgetContainer}>
          <LinkWidget 
            title="Education"
            description="It is all about who take the opportunity first."
            link="/dashboard/education"
            image={educationImg}
          />
        </div>
        <div className={styles.faqWidgetContainer}>
          <LinkWidget 
            title="FAQ"
            description="Find answers to your questions quickly. Got questions? We've got answers."
            link="/dashboard/faq"
            image={faqImg}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;