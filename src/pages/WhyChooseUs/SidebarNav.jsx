import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNav = ({ sections, activeSection, onSectionClick }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sticky top-32 z-40 hidden lg:block">
            <h3 className="text-xl font-extrabold text-brand-dark mb-6 tracking-tight">Features</h3>
            
            <nav className="flex flex-col space-y-1 relative">
                {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    
                    return (
                        <button
                            key={section.id}
                            onClick={() => onSectionClick(section.id)}
                            className={`flex items-center text-left py-2.5 px-3 rounded-xl transition-all duration-300 relative group cursor-pointer ${
                                isActive 
                                    ? 'bg-emerald-50/80 text-brand-green font-bold shadow-xs' 
                                    : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50 font-medium'
                            }`}
                        >
                            {/* Finger arrow indicator */}
                            <span 
                                className={`inline-block mr-2.5 text-base transition-all duration-300 transform ${
                                    isActive 
                                        ? 'scale-115 translate-x-1 opacity-100' 
                                        : 'opacity-35 group-hover:opacity-90 group-hover:translate-x-1'
                                }`}
                            >
                                👉
                            </span>
                            
                            <span className="text-sm tracking-tight">
                                {section.title}
                            </span>
                        </button>
                    );
                })}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Ready to get started?</p>
                <Link to="/open-account" className="w-full bg-brand-dark hover:bg-gray-900 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-brand-dark/20 flex items-center justify-center gap-2 group">
                    Open Demat Account
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </div>
    );
};

export default SidebarNav;
