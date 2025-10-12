import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import styles from './BlogPage.module.css';
import { useSubscription } from '../context/SubscriptionContext';
import { Link } from 'react-router-dom';
import Modal from '../components/dashboard/Modal';

// Импортируем ассеты
import blogPeopleImg from '../assets/blog_people.png';
import videoPlaceholder from '../assets/education_video_back.png';
import post1Img from '../assets/community_post_1.png';
import post2Img from '../assets/community_post_2.png';
import post3Img from '../assets/community_post_3.png';

// --- ДАННЫЕ ДЛЯ СТРАНИЦЫ ---
const topCardsData = [
    { type: 'image', title: 'Education in AI', content: 'Discover how AI transforms daily business tasks. Learn where to start and how to avoid common mistakes.', image: blogPeopleImg, linkText: 'Read more' },
    { type: 'promo', title: 'SALE', content: '-50% on our AI courses', subtext: 'with promocode:', code: 'BXQ123', image: videoPlaceholder },
{ type: 'event', title: 'New Event', content: 'Come to our Webinar', image: videoPlaceholder, linkText: 'Read more' },
];
const recentNewsData = [
    { 
        title: "Mastering ChatGPT for Business", 
        content: "Artificial Intelligence is revolutionizing the business landscape at an unprecedented pace. In this comprehensive guide, we explore how ChatGPT can transform your business operations, customer service, and marketing strategies. From automating routine tasks to generating creative content, ChatGPT offers a wide array of applications that can significantly boost productivity and efficiency. Many businesses are already leveraging this technology to handle customer inquiries 24/7, create personalized marketing campaigns, and even assist in strategic decision-making processes. The key to successful implementation lies in understanding the technology's capabilities and limitations, training your team effectively, and integrating it seamlessly into your existing workflows. This article provides practical tips, real-world case studies, and step-by-step guidance to help you harness the power of ChatGPT for your business growth.", 
        description: "Understand what AI can do for your business. "
    },
    { 
        title: "AI for Marketing & Ads", 
        content: "The marketing industry is undergoing a massive transformation with the integration of artificial intelligence. AI-powered tools are now capable of creating highly targeted advertising campaigns, generating compelling copy, and optimizing ad performance in real-time. In this detailed analysis, we examine how businesses are using AI to create personalized customer experiences, predict market trends, and automate their marketing workflows. From writing engaging email sequences to creating social media posts that resonate with your audience, AI can handle it all. We also discuss the ethical considerations of using AI in marketing and provide best practices for maintaining authenticity while leveraging automation. Case studies from leading brands demonstrate how AI has helped them achieve higher conversion rates, reduce advertising costs, and build stronger customer relationships.", 
        description: "Use ChatGPT to write emails, posts, and etc. "
    },
    { 
        title: "The Future of E-commerce with AI", 
        content: "E-commerce businesses are at the forefront of AI adoption, using machine learning algorithms to personalize shopping experiences, optimize pricing strategies, and streamline supply chain management. This in-depth article explores how AI is reshaping the online retail landscape. We cover everything from AI-powered product recommendations and virtual shopping assistants to automated inventory management and fraud detection systems. Learn how leading e-commerce platforms are using AI to analyze customer behavior, predict purchasing patterns, and create hyper-personalized shopping journeys. The article also addresses common challenges in AI implementation and provides practical solutions for businesses of all sizes. With detailed examples and expert insights, you'll discover how to leverage AI to stay competitive in the rapidly evolving e-commerce market.", 
        description: "Explore how artificial intelligence is transforming... "
    },
    { 
        title: "AI in Customer Service: Revolutionizing Support", 
        content: "Customer service departments worldwide are embracing AI to provide faster, more efficient, and more personalized support. This comprehensive guide examines how AI chatbots, virtual assistants, and sentiment analysis tools are changing the customer service landscape. We discuss the benefits of 24/7 availability, instant response times, and consistent service quality that AI can provide. The article includes detailed case studies from companies that have successfully implemented AI in their customer service operations, resulting in reduced wait times, higher customer satisfaction scores, and significant cost savings. We also address common concerns about AI replacing human agents and provide strategies for creating a balanced approach that combines the best of both human and artificial intelligence. Practical implementation guidelines help you choose the right AI tools and integrate them effectively into your existing customer service framework.", 
        description: "Discover how AI-powered customer service solutions... "
    },
    { 
        title: "Data Analytics and AI: Driving Business Intelligence", 
        content: "In today's data-driven world, businesses that can effectively analyze and leverage their data gain significant competitive advantages. This extensive article explores how AI is revolutionizing business intelligence and data analytics. We cover advanced topics including predictive analytics, natural language processing for data interpretation, and automated reporting systems. Learn how AI can help you identify hidden patterns in your data, forecast market trends, and make data-informed decisions with greater accuracy. The article provides practical examples of how companies across various industries are using AI to transform raw data into actionable insights. We also discuss the importance of data quality, privacy considerations, and ethical implications of AI-driven analytics. Whether you're a small business owner or a corporate executive, you'll find valuable strategies for implementing AI-powered analytics in your organization.", 
        description: "Learn how artificial intelligence is enhancing... "
    }
];
const communityPostsData = [
    { 
        title: "The Impact of AI on Modern Business Operations", 
        author: "Sarah Johnson", 
        content: "As businesses worldwide adapt to the digital transformation era, artificial intelligence is becoming an integral part of daily operations. In this comprehensive analysis, I explore how AI technologies are reshaping traditional business models and creating new opportunities for innovation. From automated workflow management to intelligent data processing, the applications are virtually limitless. What's particularly fascinating is how small and medium-sized enterprises are now able to access AI tools that were once exclusive to large corporations. The democratization of AI technology is leveling the playing field and fostering unprecedented growth opportunities. However, successful implementation requires careful planning, employee training, and ongoing optimization. In this post, I share insights from my experience implementing AI solutions across multiple organizations and discuss the common challenges businesses face during digital transformation journeys.", 
        image: post1Img 
    },
    { 
        title: "Music Industry Transformation Through AI ", 
        author: "Michael Chen", 
        content: "The music industry has undergone remarkable changes in recent years, largely driven by technological advancements and artificial intelligence. As a music producer and technology enthusiast, I've witnessed firsthand how AI is revolutionizing everything from music composition to distribution and consumption. AI algorithms can now analyze musical patterns, generate original compositions, and even predict hit songs with surprising accuracy. Streaming platforms use AI to create personalized playlists that keep listeners engaged, while artists leverage AI tools for music production and sound engineering. What's particularly exciting is how AI is making music creation more accessible to aspiring artists worldwide. However, this technological revolution also raises important questions about creativity, copyright, and the future role of human artists. In this detailed discussion, I explore both the opportunities and challenges presented by AI in the music industry, drawing from my experiences working with cutting-edge music technology.", 
        image: post2Img 
    },
    { 
        title: "Minimalism in the Age of Digital Overload", 
        author: "Emma Rodriguez", 
        content: "In our increasingly digital world, where we're constantly bombarded with information, notifications, and digital clutter, the principles of minimalism have never been more relevant. As someone who has embraced minimalism in both personal and professional life, I've discovered profound benefits in terms of mental clarity, productivity, and overall well-being. This philosophy extends beyond physical possessions to include digital spaces, work processes, and even relationships. Implementing minimalist principles in business operations can lead to more focused strategies, streamlined workflows, and better resource allocation. In this comprehensive post, I share practical strategies for applying minimalism to various aspects of life and work, including digital detox techniques, efficient workspace organization, and mindful technology usage. The journey toward minimalism isn't about deprivation but rather about creating space for what truly matters – whether that's meaningful work, quality relationships, or personal growth.", 
        image: post3Img 
    }
];

const BlogPage = () => {
    const { currentUserPackage } = useSubscription();
    const hasSubscription = !!currentUserPackage;

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (item) => {
        setModalContent(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    if (!hasSubscription) {
        return (
            <DashboardLayout currentPage="Blog">
                <div className={styles.noAccess}>
                    <h2>Blog Content is Locked</h2>
                    <p>This content is only available for users with an active subscription.</p>
                    <Link to="/dashboard/marketplace" className={styles.upgradeButton}>View Plans</Link>
                </div>
            </DashboardLayout>
        );
    }
    
    return (
        <DashboardLayout currentPage="Blog">
            <div className={styles.blogPage}>
                {/* --- Верхний ряд --- */}
                <div className={styles.topRow}>
                    {topCardsData.map((card, index) => (
                        <div key={index} className={styles.promoCard} onClick={() => openModal(card)}>
                            <img src={card.image} alt={card.title} className={styles.promoBg}/>
                            <div className={styles.promoOverlay}>
                                <h4>{card.title}</h4>
                                <p>{card.content}</p>
                                {card.code && <div className={styles.promoCode}>{card.code}</div>}
                                {card.linkText && <span className={styles.readMore}>{card.linkText} &rarr;</span>}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Recent News --- */}
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h3>Recent News</h3>
                        <p>Practical, step-by-step manuals to help you unlock the full power of AI PILLS.</p>
                    </div>
                    <div className={styles.newsGrid}>
                        {recentNewsData.map((item, index) => (
                            <div key={index} className={styles.newsCard} onClick={() => openModal(item)}>
                                <div className={styles.newsThumbnail} style={{backgroundImage: `url(${videoPlaceholder})`}}></div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Community Posts --- */}
                <div className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h3>Community Posts</h3>
                        <p>Discover what our community says</p>
                    </div>
                    <div className={styles.communityGrid}>
                        {communityPostsData.map((item, index) => (
                            <div key={index} className={styles.communityCard} onClick={() => openModal(item)}>
                                <img src={item.image} alt={item.title} />
                                <div className={styles.communityContent}>
                                    <p className={styles.author}>by {item.author}</p>
                                    <h4>{item.title}</h4>
                                    <div className={styles.communityFooter}>
                                        <button>VIEW ALL</button>
                                        {/* Здесь можно добавить аватарки */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>{modalContent.title}</h2>
                <p>{modalContent.content}</p>
            </Modal>
        </DashboardLayout>
    );
};

export default BlogPage;