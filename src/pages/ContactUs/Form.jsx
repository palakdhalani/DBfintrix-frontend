import React, { useState } from 'react';
import { PhoneOutgoing, Clock, CheckCircle2, MapPin, ExternalLink } from 'lucide-react';

const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        preferredTime: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            
            setStatus({ type: 'success', message: 'Thank you! We will call you back soon.' });
            setFormData({ fullName: '', mobileNumber: '', emailAddress: '', preferredTime: '', message: '' });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'Failed to submit. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-7xl">
                
                <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100">
                    
                    {/* Left Side - Interactive Google Map & Location Details */}
                    <div className="lg:w-1/2 flex flex-col bg-[#0c162c] text-white relative">
                        {/* Map iframe container */}
                        <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] bg-slate-900">
                            <iframe 
                                title="Dealing Beneficial Finance Services Head Office Location"
                                src="https://maps.google.com/maps?q=Dealing%20Beneficial%20Finance%20Services%20Pvt%20Ltd%2C%20206%20Business%20Bay%2C%20Kalawad%20Road%2C%20Rajkot%2C%20Gujarat%20360005&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen=""
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Location Details Card */}
                        <div className="p-6 sm:p-8 bg-[#0a152e] border-t border-white/10 flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider mb-2 border border-brand-green/30">
                                        <span className="w-2 h-2 rounded-full bg-brand-green animate-ping"></span>
                                        Head Office
                                    </div>
                                    <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                                        Dealing Beneficial Finance Services Pvt. Ltd.
                                    </h4>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-gray-300 text-sm">
                                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                                <p className="leading-relaxed">
                                    206, 2nd Floor, Business Bay, Street No. 6, Royal Park, Kalawad Road, Rajkot, Gujarat – 360005
                                </p>
                            </div>

                            <div className="pt-2">
                                <a 
                                    href="https://share.google/kCMt0aPgZekTlLonB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-brand-green hover:bg-green-600 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-green-900/30 group"
                                >
                                    <span>Open in Google Maps / Get Directions</span>
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Request a Call Back Form */}
                    <div className="lg:w-1/2 p-8 sm:p-12 lg:p-14 bg-white flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-brand-green font-bold text-xs tracking-widest uppercase mb-2">
                                Get In Touch
                            </h3>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2c4c] tracking-tight mb-2">
                                Request a Call Back
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                Leave your details below and our certified financial experts will reach out to you at your preferred time.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {status.message && (
                                <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {status.message}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800 text-sm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Mobile Number</label>
                                    <input 
                                        type="tel" 
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 90336 00411"
                                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800 text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800 text-sm"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Preferred Time to Call</label>
                                <div className="relative">
                                    <select 
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-600 text-sm appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a time slot</option>
                                        <option value="morning">Morning (9 AM - 12 PM)</option>
                                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                        <option value="evening">Evening (4 PM - 7 PM)</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Message (Optional)</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800 text-sm resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#0a152e] hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-gray-900/10 hover:shadow-xl transition-all flex items-center justify-center gap-3 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <PhoneOutgoing className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:scale-110'} transition-transform`} />
                                <span>{isSubmitting ? 'Submitting...' : 'Request Call Back'}</span>
                            </button>
                        </form>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-brand-green border border-green-100 shrink-0">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-xs text-gray-800">Quick Response</p>
                                    <p className="text-[11px] text-gray-400">Within 24 business hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-brand-green border border-green-100 shrink-0">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold text-xs text-gray-800">Expert Guidance</p>
                                    <p className="text-[11px] text-gray-400">Certified financial advisors</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Form;
