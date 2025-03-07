import React, { useState, useEffect } from 'react';
import { SocialLink } from '../types';
import { Instagram, Twitter, Youtube, Facebook, Mail, Send } from 'lucide-react';
import { useKeyboardNav, focusableSelector } from '../hooks/useKeyboardNav';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key

interface FollowOnSectionProps {
  socialLinks: SocialLink[];
}

const FollowOnSection: React.FC<FollowOnSectionProps> = ({ socialLinks }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  useEffect(() => {
    emailjs.init("mVHkRNghz-lihwkk0");
  }, []); 
  const containerRef = useKeyboardNav({
    selector: focusableSelector
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address');
      return;
    }

    // Message validation
    if (!message.trim()) {
      setStatus('error');
      setStatusMessage('Please enter a message');
      return;
    }

    setStatus('loading');
    setStatusMessage('Sending message...');

    try {
      // Send email using EmailJS
      const templateParams = {
        to_email: 'frizzler1@icloud.com',
        from_email: email,
        message: message,
        subject: 'New Message from Racing Website'
      };

      await emailjs.send(
        'service_hhm6fo8',
        'template_fv3pmp6',
        templateParams
      );
      
      setStatus('success');
      setStatusMessage('Message sent successfully! We\'ll get back to you soon.');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setStatusMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-20 px-4 md:px-8 bg-track relative"
      aria-labelledby="contact-section-title"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="contact-section-title"
          className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter"
          tabIndex={0}
        >
          GET IN TOUCH
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Have questions about races, registration, or anything else? Send us a message and we'll get back to you!
        </p>
        <div className="flex flex-col items-center max-w-2xl mx-auto mb-16">
          <div
            className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                className={`group flex flex-col items-center justify-between w-40 md:w-44 h-40 md:h-44 rounded-2xl ${social.bgClass} transition-all duration-300 hover:scale-105 p-6 md:p-8 shadow-lg`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.platform}`}
              >
                <div className="w-12 md:w-14 h-12 md:h-14 flex items-center justify-center">
                  {social.icon}
                </div>
                <div className="flex flex-col items-center gap-2 md:gap-3">
                  <span className="text-base md:text-lg font-bold text-white">{social.platform}</span>
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <span className="text-xs md:text-sm font-medium text-gray-100 text-center">
                      {social.handle}
                    </span>
                    {social.secondaryHandle && (
                      <span className="text-xs md:text-sm font-medium text-gray-100 text-center">
                        {social.secondaryHandle}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16 p-8 bg-orange-950/30 backdrop-blur-sm rounded-2xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Mail className="w-6 h-6" />
            Send us a Message
          </h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-black/20 text-white border border-orange-900/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              aria-label="Email address"
              disabled={status === 'loading'}
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="px-4 py-3 rounded-lg bg-black/20 text-white border border-orange-900/30 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              aria-label="Message"
              disabled={status === 'loading'}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className={`h-14 px-6 flex items-center justify-center gap-2 bg-orange-600 text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                  status === 'loading' ? 'opacity-75 cursor-not-allowed' : 'hover:bg-orange-700 hover:scale-105'
                }`}
                disabled={status === 'loading'}
                aria-label="Send message"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-6 h-6" />
                  </>
                )}
              </button>
            </div>
          </form>
          {statusMessage && (
            <p className={`mt-4 text-sm ${
              status === 'success' ? 'text-green-400' : 
              status === 'error' ? 'text-red-400' : 
              'text-gray-300'
            }`} role="status">
              {statusMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FollowOnSection;
