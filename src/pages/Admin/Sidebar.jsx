import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, MessageSquare, Newspaper, Settings, LogOut, Briefcase, FileText } from 'lucide-react';
import logo from '../../assets/DBFINTTIX_LOGO.jpg.jpeg';

const AdminLayout = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: 'Services Content', path: '/admin/services-content', icon: <Briefcase className="w-5 h-5" /> },
        { name: 'News Content', path: '/admin/news-content', icon: <FileText className="w-5 h-5" /> },
        { name: 'Users', path: '/admin/users', icon: <Users className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-72 bg-brand-dark text-white flex flex-col shadow-2xl">
                <div className="p-6 border-b border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-1">
                        <img src={logo} alt="Logo" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <span className="text-xl font-bold tracking-wider">Admin Panel</span>
                </div>

                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                isActive(item.path) 
                                ? 'bg-brand-green text-white font-bold shadow-lg shadow-brand-green/30' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all group">
                        <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-100 h-20 px-8 flex items-center justify-between shadow-sm flex-shrink-0">
                    <h2 className="text-2xl font-bold text-brand-dark">
                        {navItems.find(item => item.path === location.pathname)?.name || 'Admin'}
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <p className="font-bold text-sm text-brand-dark">Admin User</p>
                            <p className="text-xs text-gray-500">operation.dbfintrix@gmail.com</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-brand-green/20 border-2 border-brand-green text-brand-green flex items-center justify-center font-bold">
                            A
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-auto p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
