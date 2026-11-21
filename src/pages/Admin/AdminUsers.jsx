import React, { useState, useEffect } from 'react';
import { PhoneOutgoing, Mail, Clock, Calendar, RefreshCw, Trash2, X } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminUsers = () => {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE}/api/contacts`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data (${response.status})`);
            }
            const data = await response.json();
            setContacts(Array.isArray(data) ? data : []);
            setError(null);
        } catch (err) {
            console.error("Error fetching contacts:", err);
            setError("Failed to load contacts from server.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this request?')) {
            try {
                const res = await fetch(`${API_BASE}/api/contacts/${id}`, {
                    method: 'DELETE',
                });
                if (!res.ok) throw new Error('Delete failed');
                fetchContacts();
            } catch (err) {
                console.error("Error deleting contact:", err);
                setError('Failed to delete request.');
            }
        }
    };

    return (
        <div className="animate-fade-in max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-3">
                        <PhoneOutgoing className="w-8 h-8 text-brand-green" />
                        Callback Requests
                    </h1>
                    <p className="text-gray-500 mt-2">Manage all the "Request Call Back" submissions.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={fetchContacts}
                        className="p-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 shadow-sm transition-colors"
                        title="Refresh"
                    >
                        <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
                    </button>
                    <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                        <span className="text-gray-500 text-sm">Total Requests:</span>
                        <span className="text-2xl font-bold text-brand-green">{contacts.length}</span>
                    </div>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center justify-between border border-red-200">
                    <span>{error}</span>
                    <button onClick={() => setError(null)} className="text-red-400 hover:text-red-700">
                        <X className="w-5 h-5" />
                    </button>
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase">User Details</th>
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase">Contact Info</th>
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase">Preferred Time</th>
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase">Message</th>
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {isLoading ? (
                                <tr>
                                    <td colSpan="5" className="py-12 text-center text-gray-500">
                                        <div className="w-8 h-8 border-3 border-gray-200 border-t-brand-green rounded-full animate-spin mx-auto mb-2"></div>
                                        Loading requests...
                                    </td>
                                </tr>
                            ) : contacts.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="py-12 text-center text-gray-500">
                                        No callback requests received yet.
                                    </td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-lg flex-shrink-0">
                                                    {contact.fullName ? contact.fullName.charAt(0).toUpperCase() : '?'}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-brand-dark">{contact.fullName || 'Anonymous'}</p>
                                                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                                                        <Calendar className="w-3 h-3" />
                                                        {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'Recent'}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex flex-col gap-2 text-gray-600 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <PhoneOutgoing className="w-4 h-4 text-brand-green" />
                                                    <span className="font-medium text-brand-dark">{contact.mobileNumber || '-'}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4 text-gray-400" />
                                                    <span>{contact.emailAddress || '-'}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                                                <Clock className="w-4 h-4" />
                                                {contact.preferredTime || 'Anytime'}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 max-w-xs">
                                            <p className="text-sm text-gray-600 truncate" title={contact.message}>
                                                {contact.message || '-'}
                                            </p>
                                        </td>
                                        <td className="py-4 px-6 text-center">
                                            <button 
                                                onClick={() => handleDelete(contact._id)}
                                                className="text-red-500 hover:bg-red-50 p-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1 cursor-pointer"
                                                title="Delete request"
                                            >
                                                <Trash2 className="w-4 h-4" />
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

export default AdminUsers;
