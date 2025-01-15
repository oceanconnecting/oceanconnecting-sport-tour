'use client';

import { useState } from 'react';

export default function SubmitTourForm(formData: FormData) {
  const [status, setStatus] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitTour = async (formData: FormData) => {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      notre: ['positronqsdqs9@gmail.com'],
    };

    try {
      const response = await fetch('https://email-dqsdqsdq.vv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setStatus('Form submitted successfully!');
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to submit the form. Please try again.');
    }
  };
}