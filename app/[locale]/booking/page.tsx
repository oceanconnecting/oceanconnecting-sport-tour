'use client';
import { useEffect, useState } from 'react';
import { handleSubmitTour, getStatus } from './actions';

export default function SubmitTourForm() {

  useEffect(() => {
    console.log(getStatus)
  }, [getStatus])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    handleSubmitTour(formData);
  };

  return (
    <form className='p-96' onSubmit={handleSubmit}>
      <input className='' type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Submit</button>
      {status && <p>{status}</p>}
    </form>
  );
}
