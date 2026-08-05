import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/homepage/Home'
import ServicesMainPage from './pages/Services/ser';
import OpenAccount from './Comman components/OpenAccount';
import BecomePartner from './Comman components/BecomePartner';
import ContactUs from './pages/ContactUs/ContactUs';
import BlogPage from './pages/Blog/BlogPage';
import BlogDetail from './pages/Blog/BlogDetail';
import WhyChooseUs from './pages/WhyChooseUs/WhyChooseUs';
import AdminLayout from './pages/Admin/Sidebar';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminBlogContent from './pages/Admin/AdminBlogContent';
import AdminUsers from './pages/Admin/AdminUsers';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesMainPage />} />
      <Route path="/open-account" element={<OpenAccount />} />
      <Route path="/become-partner" element={<BecomePartner />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="blog-content" element={<AdminBlogContent />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
      </Routes>
    </>
  )
}

export default App
