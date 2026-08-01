import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import logo from '../assets/DBFINTTIX_LOGO.jpg.jpeg';
import LoginModal from './LoginModal';

const Navbar = ({ theme = "light" }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [user, setUser] = useState(null);
    const location = useLocation();

    // Check for logged in user on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLoginSuccess = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    // Handle scroll for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isSolidDark = theme === 'solid-dark';
    const isDarkText = !isScrolled && theme === 'dark' && !isSolidDark;

    // Helper to determine link styles based on active route
    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        const activeColor = isDarkText ? 'text-brand-dark font-bold' : 'text-white font-medium';
        const inactiveColor = isDarkText ? 'text-gray-600' : 'text-gray-300';

        return isActive 
            ? `${activeColor} text-sm relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-brand-green`
            : `${inactiveColor} hover:text-brand-green transition-colors text-sm font-medium`;
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isSolidDark ? 'bg-brand-dark py-4 shadow-xl border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full overflow-hidden p-1 ${isDarkText ? 'bg-brand-dark/5 shadow-none border border-gray-200' : 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'}`}>
                        <img src={logo} alt="DB Fintrix Logo" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <span className={`${isDarkText ? 'text-brand-dark' : 'text-white'} text-xl font-bold tracking-wider`}>DBFintrix</span>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className={getLinkStyle('/')}>Home</Link>
                    <Link to="/services" className={getLinkStyle('/services')}>Services</Link>
                    {/* <Link to="#" className={getLinkStyle('/about')}>About</Link> */}
                    <Link to="/market" className={getLinkStyle('/market')}>News</Link>
                    <Link to="/contact" className={getLinkStyle('/contact')}>ContactUs</Link>
                </div>

                <div className="hidden md:flex items-center gap-4 ml-4 border-l pl-4 border-white/20">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-2 ${isDarkText ? 'text-brand-dark' : 'text-white'}`}>
                                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="font-medium text-sm hidden lg:block">Hi, {user.name.split(' ')[0]}</span>
                            </div>
                            <button 
                                onClick={handleLogout}
                                className={`p-2 rounded-full transition-colors ${isDarkText ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-white/10 text-gray-300'}`}
                                title="Logout"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    ) : (
                        <button 
                            onClick={() => setIsLoginModalOpen(true)}
                            className="text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors border border-white/30"
                        >
                            Login / Sign Up
                        </button>
                    )}
                    
                    {/* Open Demat Account Button */}
                    <Link 
                        to="/services" 
                        className="bg-brand-green text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-green-600 transition-colors shadow-lg shadow-green-900/30 whitespace-nowrap"
                    >
                        Open Demat Account
                    </Link>
                </div>
            </div>

            <LoginModal 
                isOpen={isLoginModalOpen} 
                onClose={() => setIsLoginModalOpen(false)} 
                onLoginSuccess={handleLoginSuccess}
            />
        </nav>
    );
};

export default Navbar;
