'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold font-saira text-rc-dark tracking-tight mb-6">
          Contact
        </h1>

        {/* Lead paragraph */}
        <div className="mb-6">
          <p className="text-base sm:text-lg text-rc-dark leading-relaxed max-w-3xl">
            For general inquiries about Retrofit Canada, to{' '}
            <strong>submit a case study to our library</strong>, or to{' '}
            <strong>access our case studies using an API</strong>, please contact us.
          </p>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Contact Form */}
        <div className="max-w-2xl">
          {submitted ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-green-800">
              <h3 className="text-xl font-bold font-saira mb-2">Thank you!</h3>
              <p className="text-sm">
                Your message has been sent successfully. A member of our team will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-rc-dark mb-2">
                  Name <span className="text-rc-red">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-rc-navy"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-rc-dark mb-2">
                  Email <span className="text-rc-red">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-rc-navy"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-rc-dark mb-2">
                  Message <span className="text-rc-red">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-rc-navy"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  className="bg-rc-navy hover:bg-slate-800 text-white font-semibold text-sm px-8 py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
