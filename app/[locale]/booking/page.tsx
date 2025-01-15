'use client';

import { useState } from 'react';

export default function SubmitTourForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitTour = async (formData: FormData) => {
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      notre: ['positronna029@gmail.com'],
    };

    try {
      const response = await fetch('https://email-lemon-pi.vercel.app/api/oceantour', {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    submitTour(formData);
  };

  return (
    <form className='p-96' onSubmit={handleSubmit}>
      <input className='' type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <label htmlFor="cars">Choose a car:</label>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}
