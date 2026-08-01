import React, { useState, useEffect } from 'react';
import { Users, Mail, Clock, Calendar } from 'lucide-react';

const AdminUsers = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users`);
            const data = await res.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-[50vh]">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-brand-green rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-brand-dark flex items-center gap-3">
                        <Users className="w-8 h-8 text-brand-green" />
                        Registered Users
                    </h1>
                    <p className="text-gray-500 mt-2">Manage all the users registered on your platform.</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                    <span className="text-gray-500">Total Users:</span>
                    <span className="text-2xl font-bold text-brand-green">{users.length}</span>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase">User Details</th>
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase">Contact</th>
                                <th className="py-5 px-6 font-semibold text-gray-600 text-sm tracking-wider uppercase">Registration Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="py-12 text-center text-gray-500">
                                        No users have registered yet.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-lg">
                                                    {user.name ? user.name.charAt(0).toUpperCase() : '?'}
                                                </div>
                                                <div>
                                                    <p className="font-bold text-brand-dark">{user.name}</p>
                                                    <p className="text-xs text-gray-400 mt-0.5">ID: {user._id.slice(-6)}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span>{user.email}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                                    <Calendar className="w-4 h-4 text-brand-green" />
                                                    {new Date(user.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <Clock className="w-3 h-3" />
                                                    {new Date(user.createdAt).toLocaleTimeString('en-US', {
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </div>
                                            </div>
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
