import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import styles from './EducationPage.module.css';
import { useSubscription } from '../context/SubscriptionContext';
import { Link } from 'react-router-dom';
import VideoSection from '../components/dashboard/VideoSection';

// Данные для гайдов
const guidesData = {
  title: "AI PILLS Guides",
  description: "Practical, step-by-step manuals to help you unlock the full power of AI PILLS. From setup to advanced strategies, these guides show you how to use our platform.",
  videos: [
    { title: "How to Set Up Your Dashboard", description: "Learn the basics of navigating AI PILLS, customizing your view...", url: "https://youtube.com" },
    { title: "How to Connect Your CRM", description: "Step-by-step guide to linking AI PILLS with your CRM for smooth data flow...", url: "https://youtube.com" },
    { title: "How to Launch Your First Campaign", description: "Create, schedule, and run your first automated campaign across email, social...", url: "https://youtube.com" },
    { title: "How to Track Leads and Sales", description: "Discover how AI PILLS tracks your leads, updates sales pipelines...", url: "https://youtube.com" },
    { title: "How to Launch Your First Campaign", description: "Create, schedule, and run your first automated campaign across email, social...", url: "https://youtube.com" }
  ],
  viewMoreLink: "https://youtube.com/channel/your-channel-id"
};

// Данные для курсов
const coursesData = {
  title: "AI Courses",
  description: "Practical, step-by-step manuals to help you unlock the full power of AI PILLS. From setup to advanced strategies, these guides show you how to use our platform.",
  videos: [
    { title: "Mastering ChatGPT for Business", description: "Understand what AI can do for your business and where to start...", url: "https://youtube.com" },
    { title: "AI for Marketing & Ads", description: "Use AI to write emails, posts, and client replies in seconds...", url: "https://youtube.com" },
    { title: "AI Video Creation", description: "Run smarter Meta, Google, and TikTok campaigns with AI-driven targeting...", url: "https://youtube.com" },
    { title: "AI in Operations & Admin", description: "Automate scheduling, documents, reports, and inventory forecasting...", url: "https://youtube.com" },
    { title: "Future-Proof Business with AI", description: "Stay ahead of the curve with case studies, market trends, and long-term AI strategies.", url: "https://youtube.com" }
  ],
  viewMoreLink: "https://youtube.com/channel/your-channel-id"
};


const EducationPage = () => {
  const { currentUserPackage } = useSubscription();
  const hasSubscription = !!currentUserPackage; // Простая проверка: есть ли какой-либо пакет

  return (
    <DashboardLayout currentPage="Education">
      {hasSubscription ? (
        // --- Если есть подписка ---
        <div className={styles.educationContent}>
          <VideoSection {...guidesData} />
          <VideoSection {...coursesData} />
        </div>
      ) : (
        // --- Если подписки нет ---
        <div className={styles.noAccess}>
          <h2>Education Content is Locked</h2>
          <p>This content is only available for users with an active subscription. Please choose a plan to unlock our guides and courses.</p>
          <Link to="/dashboard/marketplace" className={styles.upgradeButton}>View Plans</Link>
        </div>
      )}
    </DashboardLayout>
  );
};

export default EducationPage;