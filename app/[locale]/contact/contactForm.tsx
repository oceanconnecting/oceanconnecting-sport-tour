'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    notre: ['positronna029@gmail.com'], // List of email addresses
  });

  const [status, setStatus] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false); // Définir l'état "submitted"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await fetch('https://email-lemon-pi.vercel.app/api/oceantour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' ,notre:[]});
        setSubmitted(true); // Indiquer que le formulaire a été soumis avec succès
      } else {
        setStatus('error');
        setSubmitted(false); // Réinitialiser l'état en cas d'échec
      }
    } catch (error) {
      console.error('Error while sending the form', error);
      setStatus('error');
      setSubmitted(false); // Réinitialiser l'état en cas d'erreur
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600 font-medium">
          Thank you for your message, we will get back to you soon!
        </p>
      ) : (
        <form onSubmit={handleSubmit} >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Envoyer
          </button>
        </form>
      )}

      {/* Affichage du statut */}
      {status === 'error' && (
        <p className="text-red-600 font-medium mt-4">Une erreur est survenue. Veuillez réessayer.</p>
      )}
    </div>
  );
};

export default ContactForm;
