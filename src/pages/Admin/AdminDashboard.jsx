import React, { useState, useEffect } from 'react';
import { Users, FileText, Activity, TrendingUp, Search } from 'lucide-react';

const AdminDashboard = () => {
    // Mock data for initial render until backend is connected
    const [stats] = useState([
        { title: 'Total Inquiries', value: '142', icon: <FileText />, color: 'bg-blue-500' },
        { title: 'New Users', value: '89', icon: <Users />, color: 'bg-green-500' },
        { title: 'Site Visits', value: '12.4K', icon: <Activity />, color: 'bg-purple-500' },
        { title: 'Conversion', value: '4.2%', icon: <TrendingUp />, color: 'bg-brand-green' },
    ]);

    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch inquiries from our new backend
        const fetchInquiries = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setInquiries(data);
                setError(null);
            } catch (err) {
                console.error("Error fetching from backend:", err);
                setError("Failed to load inquiries from server.");
            } finally {
                setLoading(false);
            }
        };

        fetchInquiries();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'new': return 'bg-blue-100 text-blue-800';
            case 'in-progress': return 'bg-yellow-100 text-yellow-800';
            case 'resolved': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-8">
            
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
                    <p className="text-sm text-orange-600 mt-1">Make sure you have started the backend server with `npm run start` in the server folder and MongoDB is running.</p>
                </div>
            )}

            {/* Recent Inquiries Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h3 className="text-xl font-bold text-brand-dark">Recent Call Back Requests</h3>
                    
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search requests..." 
                            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/50"
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
                                <th className="p-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr><td colSpan="6" className="p-8 text-center text-gray-500">Loading data...</td></tr>
                            ) : inquiries.length === 0 ? (
                                <tr><td colSpan="6" className="p-8 text-center text-gray-500">No requests found.</td></tr>
                            ) : (
                                inquiries.map((req) => (
                                    <tr key={req._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4">
                                            <p className="font-bold text-brand-dark">{req.fullName}</p>
                                            <p className="text-sm text-gray-500">{req.emailAddress}</p>
                                        </td>
                                        <td className="p-4 text-gray-700 font-medium">{req.mobileNumber}</td>
                                        <td className="p-4 text-gray-600 capitalize">{req.preferredTime}</td>
                                        <td className="p-4 text-gray-500 text-sm">
                                            {new Date(req.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusColor(req.status)}`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="p-4 text-right">
                                            <button className="text-brand-green hover:text-green-700 font-bold text-sm bg-green-50 hover:bg-green-100 px-4 py-1.5 rounded-lg transition-colors">
                                                View
                                            </button>
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
