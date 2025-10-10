import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { SubscriptionProvider } from './context/SubscriptionContext';

// Импорты страниц
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import BenefitsPage from './pages/BenefitsPage';
import FaqPage from './pages/FaqPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import DashboardPage from './pages/DashboardPage';
import MyPackagePage from './pages/MyPackagePage';
import MarketplacePage from './pages/MarketplacePage';
import EducationPage from './pages/EducationPage';
import BlogPage from './pages/BlogPage';
import SupportPage from './pages/SupportPage';
import DashboardFaqPage from './pages/DashboardFaqPage';
import ProfilePage from './pages/ProfilePage';

// Импорты компонентов
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

// Компонент-обертка, который содержит ВСЕ роуты
const AppRoutes = () => {
  return (
    <Routes>
      {/* --- ОБЩЕДОСТУПНЫЕ РОУТЫ --- */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/benefits" element={<BenefitsPage />} />
      <Route path="/faq" element={<FaqPage />} />

      {/* --- РОУТЫ АУТЕНТИФИКАЦИИ --- */}
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />

      {/* --- ЗАЩИЩЕННЫЕ РОУТЫ (ДАШБОРД) --- */}
      <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      <Route path="/dashboard/my-package" element={<ProtectedRoute><MyPackagePage /></ProtectedRoute>} />
      <Route path="/dashboard/marketplace" element={<ProtectedRoute><MarketplacePage /></ProtectedRoute>} />
      <Route path="/dashboard/education" element={<ProtectedRoute><EducationPage /></ProtectedRoute>} />
      <Route path="/dashboard/blog" element={<ProtectedRoute><BlogPage /></ProtectedRoute>} />
      <Route path="/dashboard/support" element={<ProtectedRoute><SupportPage /></ProtectedRoute>} />
      <Route path="/dashboard/faq" element={<ProtectedRoute><DashboardFaqPage /></ProtectedRoute>} />
      <Route path="/dashboard/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
    </Routes>
  );
};


// Компонент, который решает, какой макет использовать
const AppContent = () => {
  const location = useLocation();
  
  const isSpecialLayout = location.pathname.startsWith('/sign-in') || 
                          location.pathname.startsWith('/sign-up') || 
                          location.pathname.startsWith('/verify-email') || 
                          location.pathname.startsWith('/dashboard');

  if (isSpecialLayout) {
    // Для "особых" страниц рендерим только роуты
    return (
      <main>
        <AppRoutes />
      </main>
    );
  }

  // Для всех остальных страниц используем стандартный макет
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <CtaSection />
      <Footer />
    </>
  );
};

// Главный компонент App
const App = () => (
  <Router>
    <SubscriptionProvider>
      <div className="App">
        <AppContent />
      </div>
    </SubscriptionProvider>
  </Router>
);

export default App;