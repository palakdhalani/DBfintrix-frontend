import React, { useState, useEffect } from 'react';
import { Users, FileText, Activity, TrendingUp, Search, RefreshCw } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminDashboard = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchInquiries = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE}/api/contacts`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data (${response.status})`);
            }
            const data = await response.json();
            setInquiries(Array.isArray(data) ? data : []);
            setError(null);
        } catch (err) {
            console.error("Error fetching from backend:", err);
            setError("Failed to load inquiries from server.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const totalCount = inquiries.length;
    const newCount = inquiries.filter(i => (i.status || 'new') === 'new').length;
    const inProgressCount = inquiries.filter(i => i.status === 'in-progress').length;
    const resolvedCount = inquiries.filter(i => i.status === 'resolved').length;

    const stats = [
        { title: 'Total Inquiries', value: totalCount.toString(), icon: <FileText className="w-6 h-6" />, color: 'bg-blue-500' },
        { title: 'New Requests', value: newCount.toString(), icon: <Users className="w-6 h-6" />, color: 'bg-green-500' },
        { title: 'In Progress', value: inProgressCount.toString(), icon: <Activity className="w-6 h-6" />, color: 'bg-purple-500' },
        { title: 'Resolved', value: resolvedCount.toString(), icon: <TrendingUp className="w-6 h-6" />, color: 'bg-brand-green' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-800 border border-blue-200';
            case 'in-progress': return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
            case 'resolved': return 'bg-green-100 text-green-800 border border-green-200';
            default: return 'bg-gray-100 text-gray-800 border border-gray-200';
        }
    };

    const filteredInquiries = inquiries.filter(req => 
        (req.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (req.emailAddress || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (req.mobileNumber || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (req.status || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (req.preferredTime || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <p className="text-gray-500 mt-1">Overview of customer inquiries and activity.</p>
                </div>
                <button
                    onClick={fetchInquiries}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5">
                        <div className={`w-14 h-14 rounded-xl text-white flex items-center justify-center shadow-lg ${stat.color}`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">{stat.title}</p>
                            <h3 className="text-2xl font-extrabold text-brand-dark">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Error Banner if backend fails */}
            {error && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-md">
                    <p className="text-orange-700 font-medium">{error}</p>
                    <p className="text-sm text-orange-600 mt-1">Ensure the API server is running on {API_BASE}.</p>
                </div>
            )}

            {/* Recent Inquiries Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gray-50/50">
                    <h3 className="text-xl font-bold text-brand-dark">Recent Call Back Requests</h3>
                    
                    <div className="relative w-full sm:w-64">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search requests..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50 bg-white"
                        />
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                                <th className="p-4 font-bold">Name & Email</th>
                                <th className="p-4 font-bold">Phone Number</th>
                                <th className="p-4 font-bold">Preferred Time</th>
                                <th className="p-4 font-bold">Date</th>
                                <th className="p-4 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr><td colSpan="5" className="p-8 text-center text-gray-500">Loading data...</td></tr>
                            ) : filteredInquiries.length === 0 ? (
                                <tr><td colSpan="5" className="p-8 text-center text-gray-500">No requests found.</td></tr>
                            ) : (
                                filteredInquiries.map((req) => (
                                    <tr key={req._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4">
                                            <p className="font-bold text-brand-dark">{req.fullName || 'Anonymous'}</p>
                                            <p className="text-sm text-gray-500">{req.emailAddress || '-'}</p>
                                        </td>
                                        <td className="p-4 text-gray-700 font-medium">{req.mobileNumber || '-'}</td>
                                        <td className="p-4 text-gray-600 capitalize">{req.preferredTime || 'Anytime'}</td>
                                        <td className="p-4 text-gray-500 text-sm">
                                            {req.createdAt ? new Date(req.createdAt).toLocaleDateString() : 'Recent'}
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(req.status || 'new')}`}>
                                                {req.status || 'new'}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
