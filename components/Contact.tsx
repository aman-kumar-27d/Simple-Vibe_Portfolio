import React, { useState, FormEvent } from 'react';
import { GithubIcon, LinkedinIcon } from './icons';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    // In a real app, you would handle form submission here.
    // For now, we'll just simulate a success.
    setStatus('success');
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Get In Touch<span className="text-[var(--primary)]">.</span>
      </h2>
      <div className="text-center mb-12 text-slate-400">
        <p>Email: <a href="mailto:Aman.Kumar.r2026@gmail.com" className="hover:text-[var(--primary)]">Aman.Kumar.r2026@gmail.com</a></p>
        <p>Mobile: +91-6201449218</p>
      </div>
      <div className="max-w-xl mx-auto">
        {status === 'success' ? (
          <div className="text-center p-8 bg-[var(--card)] border border-[var(--primary)] rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full bg-[var(--card)] border border-[var(--border)] rounded-md p-3 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full bg-[var(--card)] border border-[var(--border)] rounded-md p-3 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full bg-[var(--card)] border border-[var(--border)] rounded-md p-3 focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none transition"></textarea>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
               <button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
               <a href="/resume.pdf" download="AmanKumar_Resume.pdf" className="w-full sm:w-auto text-center px-8 py-3 bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors duration-300">
                Download Resume
              </a>
            </div>
          </form>
        )}
      </div>

      <div className="flex justify-center items-center space-x-6 mt-16">
        <a href="https://github.com/aman-kumar-27d" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" className="text-slate-400 hover:text-[var(--primary)] transition-colors"><GithubIcon className="w-8 h-8" /></a>
        <a href="https://www.linkedin.com/in/aman-kumar-27d" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" className="text-slate-400 hover:text-[var(--primary)] transition-colors"><LinkedinIcon className="w-8 h-8" /></a>
      </div>
    </section>
  );
};
