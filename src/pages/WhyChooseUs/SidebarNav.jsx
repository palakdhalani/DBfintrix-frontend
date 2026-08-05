import React from 'react';
import { Link } from 'react-router-dom';

const SidebarNav = ({ sections, activeSection, onSectionClick }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 sticky top-32 z-40 hidden lg:block">
            <h3 className="text-xl font-extrabold text-brand-dark mb-6 tracking-tight">Features</h3>
            
            <nav className="flex flex-col space-y-2 relative">
                {/* Active indicator line */}
                <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gray-100 -z-10 rounded-full"></div>

                {sections.map((section, idx) => {
                    const isActive = activeSection === section.id;
                    
                    return (
                        <button
                            key={section.id}
                            onClick={() => onSectionClick(section.id)}
                            className={`flex items-center text-left py-3 px-3 transition-all duration-300 relative group`}
                        >
                            {/* Dot indicator */}
                            <div className={`absolute left-0 w-[6px] h-[6px] rounded-full transition-all duration-300 transform -translate-x-1/2 ${isActive ? 'bg-brand-green scale-150 shadow-[0_0_8px_rgba(15,157,39,0.6)]' : 'bg-gray-300 group-hover:bg-gray-400 group-hover:scale-125'}`}></div>
                            
                            <span className={`ml-6 font-semibold text-sm transition-colors duration-300 ${isActive ? 'text-brand-green' : 'text-gray-500 group-hover:text-gray-900'}`}>
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
