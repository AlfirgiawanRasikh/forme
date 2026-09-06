'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      projectType: formData.get('projectType') as string,
      message: formData.get('message') as string,
      website: formData.get('website') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to send message');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="py-16 text-center" role="status" aria-live="polite">
        <h2 className="text-h2 font-medium mb-4">Message sent</h2>
        <p className="text-body text-muted mb-8">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm uppercase tracking-wider border-b border-foreground pb-1 hover:opacity-60 transition-opacity duration-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      aria-busy={status === 'submitting'}
    >
      {/* Name */}
      <div>
        <label 
          htmlFor="name" 
          className="block text-metadata uppercase tracking-wider mb-3 text-muted"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          disabled={status === 'submitting'}
          className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground outline-none transition-colors duration-300 disabled:opacity-50"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label 
          htmlFor="email" 
          className="block text-metadata uppercase tracking-wider mb-3 text-muted"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          disabled={status === 'submitting'}
          className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground outline-none transition-colors duration-300 disabled:opacity-50"
          placeholder="your@email.com"
        />
      </div>

      {/* Project Type */}
      <div>
        <label 
          htmlFor="projectType" 
          className="block text-metadata uppercase tracking-wider mb-3 text-muted"
        >
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          disabled={status === 'submitting'}
          className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground outline-none transition-colors duration-300 disabled:opacity-50 cursor-pointer"
        >
          <option value="">Select a project type</option>
          <option value="Brand Identity">Brand Identity</option>
          <option value="Digital Experience">Digital Experience</option>
          <option value="Creative Development">Creative Development</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label 
          htmlFor="message" 
          className="block text-metadata uppercase tracking-wider mb-3 text-muted"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          disabled={status === 'submitting'}
          rows={6}
          className="w-full px-0 py-3 bg-transparent border-b border-foreground/20 focus:border-foreground outline-none transition-colors duration-300 resize-none disabled:opacity-50"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div
          className="p-4 border border-red-500/20 bg-red-500/5"
          role="alert"
          aria-live="polite"
        >
          <p className="text-sm text-red-600">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="text-sm uppercase tracking-wider border-b border-foreground pb-1 hover:opacity-60 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Inquiry →'}
        </button>
      </div>
    </form>
  );
}
