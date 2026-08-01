import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home'
import ServicesMainPage from './pages/Services/ser';
import ContactUs from './pages/ContactUs/ContactUs';
import News from './pages/News/News';
import AdminLayout from './pages/Admin/Sidebar';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminServicesContent from './pages/Admin/AdminServicesContent';
import AdminNewsContent from './pages/Admin/AdminNewsContent';
import AdminUsers from './pages/Admin/AdminUsers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesMainPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/market" element={<News />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="services-content" element={<AdminServicesContent />} />
        <Route path="news-content" element={<AdminNewsContent />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
    </Routes>
  )
}

export default App
