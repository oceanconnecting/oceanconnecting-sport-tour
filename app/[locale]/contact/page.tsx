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
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-full">
      <div className="flex flex-col gap-3 h-screen py-8 w-full justify-center items-center">
        <Toaster/>
        <Tag>Contact Us</Tag>
        <form className="flex w-full px-[5vh] lg:px-10 flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between">
            <label className="w-10" htmlFor="name">Name</label>
            <input
              ref={nameInput}
              id="name"
              className="px-6 w-80 py-4 rounded-full border border-black outline-none"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="w-10" htmlFor="email">Email</label>
            <input
              ref={emailInput}
              id="email"
              className="px-6 w-80 py-4 rounded-full border border-black outline-none"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex items-start justify-between">
            <label htmlFor="message">Message</label>
            <textarea
              ref={messageInput}
              className="px-6 w-80 max-h-32 py-4 rounded-3xl border border-black outline-none"
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
        className="hidden lg:block inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/ContactImg.jpg')" }}
      ></div>
    </div>
  );
}
