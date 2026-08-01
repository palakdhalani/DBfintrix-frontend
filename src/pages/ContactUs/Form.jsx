import React, { useState } from 'react';
import { PhoneOutgoing, Clock, CheckCircle2 } from 'lucide-react';

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

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! We will call you back soon.' });
                setFormData({ fullName: '', mobileNumber: '', emailAddress: '', preferredTime: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'Failed to connect to the server. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-6xl">
                
                <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100">
                    
                    {/* Left Side - Info Banner */}
                    <div className="lg:w-5/12 bg-brand-dark p-10 md:p-14 flex flex-col relative overflow-hidden">
                        {/* Decorative glowing blobs */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-green opacity-20 blur-[80px]"></div>
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-green opacity-20 blur-[80px]"></div>

                        <div className="relative z-10 flex-grow flex flex-col justify-center">
                            <h3 className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4">
                                Get In Touch
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Request a <br className="hidden lg:block"/> Call Back
                            </h2>
                            <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                                Leave your details below and our certified financial experts will reach out to you at your preferred time.
                            </p>

                            <div className="space-y-8 mt-auto">
                                <div className="flex items-center gap-5 text-white">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner">
                                        <Clock className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Quick Response</p>
                                        <p className="text-sm text-gray-400">Within 24 business hours</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 text-white">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner">
                                        <CheckCircle2 className="w-6 h-6 text-brand-green" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Expert Guidance</p>
                                        <p className="text-sm text-gray-400">Certified financial advisors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Actual Form */}
                    <div className="lg:w-7/12 p-10 md:p-14 bg-white">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {status.message && (
                                <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {status.message}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-800 mb-2">Mobile Number</label>
                                    <input 
                                        type="tel" 
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                        placeholder="+91 90336 00411"
                                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    name="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Preferred Time to Call</label>
                                <div className="relative">
                                    <select 
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-600 appearance-none cursor-pointer"
                                    >
                                        <option value="">Select a time slot</option>
                                        <option value="morning">Morning (9 AM - 12 PM)</option>
                                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                        <option value="evening">Evening (4 PM - 7 PM)</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-800 mb-2">Message (Optional)</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="3"
                                    placeholder="How can we help you?"
                                    className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all text-gray-800 resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-gray-900/10 hover:shadow-xl transition-all flex items-center justify-center gap-3 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <PhoneOutgoing className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:scale-110'} transition-transform`} />
                                {isSubmitting ? 'Submitting...' : 'Request Call Back'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Form;
