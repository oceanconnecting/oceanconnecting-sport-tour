'use client';
import { handleSubmitTour } from './actions';
import { useState } from 'react';

export default function SubmitTourForm() {

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
