// components/ContactForm.jsx
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xeelrera");
  const [showSuccess, setShowSuccess] = React.useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  if (showSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="text-center py-16 px-6 rounded-xl bg-linear-to-br from-green-500/20 to-emerald-600/20 border border-green-400/30 max-w-lg mx-auto">
          <svg className="w-20 h-20 mx-auto text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="relative min-h-screen p-8 md:p-12 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-600 mb-3">
            Let's Talk!
          </h2>
          <p className="text-gray-300 text-lg">Feel free to reach out, I'd love to hear from you!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12 bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
          {state.errors && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-300 font-semibold">Oops! Something went wrong.</p>
              <p className="text-red-400 text-sm">Please check the form and try again.</p>
            </div>
          )}

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </span>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div className="relative">
            <span className="absolute top-3 left-4">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            </span>
            <textarea
              name="message"
              placeholder="What's on your mind?"
              required
              rows="5"
              className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-purple-400/50 resize-none"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 px-6 bg-linear-to-r from-purple-500 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:from-purple-600 hover:to-indigo-700 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-purple-500/50 disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;