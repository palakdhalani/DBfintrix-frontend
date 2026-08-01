import React, { useState, useEffect } from 'react';
import { Save, Image as ImageIcon, LayoutTemplate } from 'lucide-react';

const AdminContent = () => {
    const [selectedSection, setSelectedSection] = useState('services-hero');
    const [formData, setFormData] = useState({
        heading: '',
        subheading: '',
        imageUrl: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const sections = [
        { id: 'services-hero', name: 'Services Hero Section' },
        { id: 'news-top-story', name: 'News Top Story' }
    ];

    // Fetch the content for the currently selected section
    useEffect(() => {
        const fetchContent = async () => {
            setIsLoading(true);
            setStatus({ type: '', message: '' });
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hero/${selectedSection}`);
                if (res.ok) {
                    const data = await res.json();
                    setFormData({
                        heading: data.heading || '',
                        subheading: data.subheading || '',
                        imageUrl: data.imageUrl || ''
                    });
                } else {
                    // Not found or error, clear form
                    setFormData({ heading: '', subheading: '', imageUrl: '' });
                }
            } catch (err) {
                console.error("Error fetching content:", err);
                setStatus({ type: 'error', message: 'Could not connect to the backend server.' });
            } finally {
                setIsLoading(false);
            }
        };

        fetchContent();
    }, [selectedSection]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setStatus({ type: '', message: '' });

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/hero/${selectedSection}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus({ type: 'success', message: 'Content saved successfully! It is now live.' });
            } else {
                setStatus({ type: 'error', message: 'Failed to save content.' });
            }
        } catch (err) {
            console.error("Error saving content:", err);
            setStatus({ type: 'error', message: 'Could not connect to the backend server.' });
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div>
                    <h2 className="text-2xl font-extrabold text-brand-dark">Content Settings</h2>
                    <p className="text-gray-500 mt-1">Manage dynamic text and images for your website.</p>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row gap-4 items-center">
                    <LayoutTemplate className="w-5 h-5 text-gray-400 hidden md:block" />
                    <label className="font-bold text-gray-700 whitespace-nowrap">Select Section to Edit:</label>
                    <select 
                        value={selectedSection}
                        onChange={(e) => setSelectedSection(e.target.value)}
                        className="w-full md:w-64 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-green font-medium text-brand-dark"
                    >
                        {sections.map(sec => (
                            <option key={sec.id} value={sec.id}>{sec.name}</option>
                        ))}
                    </select>
                </div>

                <div className="p-6 md:p-8">
                    {isLoading ? (
                        <div className="py-20 text-center text-gray-500 font-medium animate-pulse">
                            Loading content configuration...
                        </div>
                    ) : (
                        <form onSubmit={handleSave} className="space-y-6">
                            {status.message && (
                                <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {status.message}
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Heading Text</label>
                                <input 
                                    type="text" 
                                    name="heading"
                                    value={formData.heading}
                                    onChange={handleChange}
                                    placeholder="Enter the large headline..."
                                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Subheading / Description</label>
                                <textarea 
                                    name="subheading"
                                    value={formData.subheading}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="Enter the description text below the headline..."
                                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all resize-none"
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                                    <ImageIcon className="w-4 h-4 text-gray-500" /> Image URL
                                </label>
                                <input 
                                    type="url" 
                                    name="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-sm"
                                />
                                {formData.imageUrl && (
                                    <div className="mt-4 border border-gray-100 rounded-xl overflow-hidden max-w-sm relative">
                                        <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">Image Preview</div>
                                        <img src={formData.imageUrl} alt="Preview" className="w-full object-contain max-h-64 bg-gray-50" />
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 border-t border-gray-100 flex justify-end">
                                <button 
                                    type="submit"
                                    disabled={isSaving}
                                    className="bg-brand-green hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-green-900/20 hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <Save className={`w-5 h-5 ${isSaving ? 'animate-pulse' : ''}`} />
                                    {isSaving ? 'Saving...' : 'Save Content'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminContent;
