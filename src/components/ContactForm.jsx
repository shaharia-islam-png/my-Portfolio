// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(''); // New state for handling errors

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                body: data, 
            });

            if (response.ok) {
                console.log('Form successfully submitted');
                setSubmitted(true);
                setError(''); // Clear any previous errors
                setTimeout(() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                }, 5000);
            } else {
                // Set the error message instead of using alert()
                setError('Sorry! There was a problem sending your message. Please try again.');
                setTimeout(() => {
                    setError(''); // Clear error after 5 seconds
                }, 5000);
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            // Set a generic error message
            setError('Sorry! An unexpected error occurred. Please check your connection.');
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    };

    return (
        <div className="w-full max-w-2xl p-8 md:p-12 bg-white/5 backdrop-blur-lg rounded-4xl shadow-2xl border border-white/10 mt-20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-500/50 ">
              
            <div className="text-center mb-10">
            
                <h2 className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600 mb-3">
                    Let's Talk! 
                </h2>
                <p className="text-gray-300 text-lg">Feel free to reach out, I'd love to hear from you!</p>
            </div>
            
            {/* Conditional Rendering: Show Success, Error, or the Form */}
            {submitted ? (
                <div className="text-center py-16 px-6 rounded-xl bg-linear-to-br from-green-500/20 to-emerald-600/20 border border-green-400/30">
                    <svg className="w-20 h-20 mx-auto text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
            ) : error ? ( // NEW: Show error message if there is an error
                <div className="text-center py-16 px-6 rounded-xl bg-linear-to-br from-red-500/20 to-orange-600/20 border border-red-400/30">
                    <svg className="w-20 h-20 mx-auto text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="text-3xl font-bold text-white mb-2">Oops! Something went wrong.</h3>
                    <p className="text-gray-300">{error}</p>
                </div>
            ) : (
                <form 
                    name="contact" 
                    method="POST" 
                    data-netlify="true" 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                        />
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                        />
                    </div>
                    
                    <div className="relative">
                        <span className="absolute top-4 left-4">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="What's on your mind?"
                            required
                            rows="6"
                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:border-purple-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/50 resize-none"
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="w-full py-4 px-6 bg-linear-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    >
                        Send Message 
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;