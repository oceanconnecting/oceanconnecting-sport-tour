'use client';

import Toaster, { handleSubmitTour } from './actions';
import Button from '@/Components/Button';
import Tag from '@/Components/Tag';
import { useRef } from 'react';

export default function SubmitTourForm() {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const clearInputs = () => {
    if (nameInput.current) nameInput.current.value = '';
    if (emailInput.current) emailInput.current.value = '';
    if (messageInput.current) messageInput.current.value = '';
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    handleSubmitTour(formData); // Your custom function to handle form submission
    clearInputs();
    
  };

  return (
    <div className="h-screen lg:grid lg:grid-cols-2 w-full">
      <Toaster/>
      <div className="flex flex-col gap-3 h-screen bg-white backdrop-blur-md bg-opacity-80 py-16 w-full justify-center items-center">
        <Tag>Contact Us</Tag>
        <form className="flex w-full h-screen px-16 pb-6 flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start">
            <label className="w-10 ml-5 mb-1" htmlFor="name">Name</label>
            <input
              ref={nameInput}
              id="name"
              className="px-5 py-2 rounded-full border w-full border-black outline-none"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className="w-10 ml-5 mb-1" htmlFor="email">Email</label>
            <input
              ref={emailInput}
              id="email"
              className="px-5 py-2 w-full rounded-full border border-black outline-none"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className='ml-5 mb-1' htmlFor="message">Message</label>
            <textarea
              ref={messageInput}
              className="px-6 w-full h-24 min-h-24 max-h-24 py-4 rounded-3xl border border-black outline-none"
              name="message"
              placeholder="Message"
              required
            />
          </div>
          <div className="flex justify-center pt-3">
            <Button type="submit" variant="dark_primary">Submit</Button>
          </div>
        </form>
      </div>
      <div
        className=" absolute -z-20 inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/ContactImg.jpg')" }}
      ></div>
    </div>
  );
}
