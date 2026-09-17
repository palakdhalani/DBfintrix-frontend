import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, User, Menu, X } from 'lucide-react';
import logoIcon from '../assets/db-logo-icon.jpg';
import logoText from '../assets/db-logo-text.jpg';
import LoginModal from './LoginModal';

const Navbar = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const handleNavClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    // Helper to determine link styles based on active route
    const getLinkStyle = (path) => {
        const isActive = location.pathname === path;
        return isActive 
            ? `text-brand-dark font-bold text-sm relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-brand-green`
            : `text-gray-600 hover:text-brand-green transition-colors text-sm font-medium`;
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white py-2 sm:py-2.5 shadow-md border-b border-gray-100">
            <div className="container mx-auto px-6 max-w-8xl flex items-center justify-between">
                
                {/* Brand Logo: First Icon Logo, then Text Logo on the right */}
                <Link to="/" onClick={() => handleNavClick('/')} className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group py-0.5">
                    {/* First: Main Graphic Icon Logo */}
                    <img 
                        src={logoIcon} 
                        alt="DB Fintrix Logo" 
                        className="h-11 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                    />
                    
                    {/* Next: Text Logo on the right */}
                    <img 
                        src={logoText} 
                        alt="Dealing Beneficial Fintrix Pvt. Ltd." 
                        className="h-9 sm:h-11 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-102" 
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-7">
                    <Link to="/" onClick={() => handleNavClick('/')} className={getLinkStyle('/')}>Home</Link>
                    <Link to="/about" onClick={() => handleNavClick('/about')} className={getLinkStyle('/about')}>About Us</Link>
                    <Link to="/services" onClick={() => handleNavClick('/services')} className={getLinkStyle('/services')}>Services</Link>
                    <Link to="/why-choose-us" onClick={() => handleNavClick('/why-choose-us')} className={getLinkStyle('/why-choose-us')}>Why Choose Us</Link>
                    <Link to="/gallery" onClick={() => handleNavClick('/gallery')} className={getLinkStyle('/gallery')}>Gallery</Link>
                    <Link to="/blog" onClick={() => handleNavClick('/blog')} className={getLinkStyle('/blog')}>Blog</Link>
                    <Link to="/contact" onClick={() => handleNavClick('/contact')} className={getLinkStyle('/contact')}>ContactUs</Link>
                </div>

                {/* Right Side Buttons (Desktop) */}
                <div className="hidden lg:flex items-center gap-4 ml-4 border-l pl-4 border-gray-200">
                    {user ? (
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-brand-dark">
                                <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <span className="font-medium text-sm hidden xl:block">Hi, {user.name.split(' ')[0]}</span>
                            </div>
                            <button 
                                onClick={handleLogout}
                                className="p-2 rounded-full transition-colors hover:bg-gray-100 text-gray-600"
                                title="Logout"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </div>
                    ) : (
                        <Link 
                            to="/become-partner"
                            onClick={() => handleNavClick('/become-partner')}
                            className="px-5 py-2.5 rounded-full font-bold text-sm transition-colors border whitespace-nowrap text-brand-dark border-gray-300 hover:bg-gray-100"
                        >
                            Become a Partner
                        </Link>
                    )}
                    
                    {/* Open Demat Account Button */}
                    <Link 
                        to="/open-account" 
                        className="bg-brand-green text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-green-600 transition-colors shadow-lg shadow-green-900/30 whitespace-nowrap"
                    >
                        Open Demat Account
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    className="lg:hidden text-brand-dark p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-6 space-y-4">
                    <Link to="/" onClick={() => handleNavClick('/')} className={getLinkStyle('/')}>Home</Link>
                    <Link to="/about" onClick={() => handleNavClick('/about')} className={getLinkStyle('/about')}>About Us</Link>
                    <Link to="/services" onClick={() => handleNavClick('/services')} className={getLinkStyle('/services')}>Services</Link>
                    <Link to="/why-choose-us" onClick={() => handleNavClick('/why-choose-us')} className={getLinkStyle('/why-choose-us')}>Why Choose Us</Link>
                    <Link to="/gallery" onClick={() => handleNavClick('/gallery')} className={getLinkStyle('/gallery')}>Gallery</Link>
                    <Link to="/blog" onClick={() => handleNavClick('/blog')} className={getLinkStyle('/blog')}>Blog</Link>
                    <Link to="/contact" onClick={() => handleNavClick('/contact')} className={getLinkStyle('/contact')}>ContactUs</Link>
                    
                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
                        {user ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-brand-dark">
                                    <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white font-bold text-sm">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <span className="font-medium text-sm">Hi, {user.name.split(' ')[0]}</span>
                                </div>
                                <button 
                                    onClick={handleLogout}
                                    className="text-gray-600 flex items-center gap-2 text-sm font-bold"
                                >
                                    <LogOut className="w-4 h-4" /> Logout
                                </button>
                            </div>
                        ) : (
                            <Link 
                                to="/become-partner"
                                onClick={() => handleNavClick('/become-partner')}
                                className="text-center px-5 py-2.5 rounded-full font-bold text-sm border text-brand-dark border-gray-300 hover:bg-gray-100"
                            >
                                Become a Partner
                            </Link>
                        )}
                        <Link 
                            to="/open-account" 
                            className="text-center bg-brand-green text-white px-7 py-2.5 rounded-full font-bold text-sm hover:bg-green-600 transition-colors shadow-lg"
                        >
                            Open Demat Account
                        </Link>
                    </div>
                </div>
            )}

            <LoginModal 
                isOpen={isLoginModalOpen} 
                onClose={() => setIsLoginModalOpen(false)} 
                onLoginSuccess={handleLoginSuccess}
            />
        </nav>
    );
};

export default Navbar;
