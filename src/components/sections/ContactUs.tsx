import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactUs() {
  const [ref, inView] = useInView();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const response = await fetch(`${BASE_URL}/api/notifications/email/contact-us`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="bg-brand-dark w-full px-4 sm:px-6 md:px-16 py-20">
      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-white font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-[-0.03em]">
            Get in Touch
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            Have a question or partnership inquiry? We'd love to hear from you.
          </p>
        </div>

        {/* Form Container */}
        <div className={`max-w-2xl mx-auto transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {submitted ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center">
              <p className="text-white font-semibold text-lg">
                Thank you for reaching out! We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-xl px-4 py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#999] bg-white/90 backdrop-blur-sm w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="rounded-xl px-4 py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#999] bg-white/90 backdrop-blur-sm w-full"
                />
              </div>

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
                className="rounded-xl px-4 py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#999] bg-white/90 backdrop-blur-sm w-full"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={5}
                className="rounded-xl px-4 py-3.5 text-[#4e4c84] font-medium text-base outline-none placeholder:text-[#999] bg-white/90 backdrop-blur-sm w-full resize-none"
              />

              {error && <p className="text-red-300 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-brand-primary text-white font-semibold text-base sm:text-lg rounded-xl px-6 py-4 hover:bg-[#3218c8] transition-colors tracking-[-0.04em] disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
