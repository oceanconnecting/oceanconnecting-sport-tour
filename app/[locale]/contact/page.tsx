'use client';

import Toaster, { handleSubmitTour } from './actions';
import Button from '@/Components/Button';
import Tag from '@/Components/Tag';
import { Input } from 'postcss';
import { getIsSubmitit } from './actions';
import { useEffect, useRef, useState } from 'react';

export default function SubmitTourForm() {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const clearInputs = () => {
    if (nameInput.current) nameInput.current.value = '';
    if (emailInput.current) emailInput.current.value = '';
    if (messageInput.current) messageInput.current.value = '';
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Start submitting state
    const formData = new FormData(event.currentTarget);

    try {
      await handleSubmitTour(formData);
      clearInputs();
    } catch (error) {
      console.error('Error during form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="py-28 px-4 md:px-6 lg:px-8 bg-gray-50">
      <Toaster />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-[600px]">
              We'd love to hear from you. Please fill out this form or shoot us an email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                ref={nameInput}
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                ref={emailInput}
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                ref={messageInput}
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin -ml-1 mr-3 h-5 w-5 text-white border-t-2 border-white rounded-full"></div>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="flex items-center space-x-3 text-gray-600">
              <input className="h-5 w-5" />
              <span>123 Main St, Anytown, USA 12345</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <input className="h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <input className="h-5 w-5" />
              <span>contact@example.com</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative h-[400px] lg:h-auto rounded-lg overflow-hidden">
          {/** IMAGE */}
        </div>
      </div>
    </section>
  );
}
