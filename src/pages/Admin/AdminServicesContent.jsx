import React, { useState, useEffect } from 'react';
import { Save, Image as ImageIcon, Briefcase } from 'lucide-react';

const AdminServicesContent = () => {
    const selectedSection = 'services-hero';
    const [formData, setFormData] = useState({
        heading: '',
        subheading: '',
        imageUrl: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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
    }, []);

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
                setStatus({ type: 'success', message: 'Services Hero content saved successfully!' });
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
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center">
                        <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-extrabold text-brand-dark">Services Hero Section</h2>
                        <p className="text-gray-500 mt-1">Manage the text and images for the Services page hero banner.</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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
                                <label className="block text-sm font-bold text-gray-800 mb-2">Heading Text (Use &lt;br&gt; for line breaks)</label>
                                <input 
                                    type="text" 
                                    name="heading"
                                    value={formData.heading}
                                    onChange={handleChange}
                                    placeholder="e.g. Enjoy 1 month of <br> FREE trading"
                                    className="w-full px-5 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Subheading</label>
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
                                    <ImageIcon className="w-4 h-4 text-gray-500" /> Hero Image URL
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

export default AdminServicesContent;
