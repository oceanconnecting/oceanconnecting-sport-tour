"use client";

import { useTranslations } from "next-intl";
import Toaster, { handleSubmitTour } from "./actions";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import MyMap from "@/Components/MyMap";

export default function contactForm() {
  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const clearInputs = () => {
    if (nameInput.current) nameInput.current.value = "";
    if (emailInput.current) emailInput.current.value = "";
    if (messageInput.current) messageInput.current.value = "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true); // Start submitting state
    const formData = new FormData(event.currentTarget);

    try {
      await handleSubmitTour(formData);
      clearInputs();
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const t = useTranslations("contact");

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section className="py-28 px-4 md:px-6 lg:px-8 bg-background-50">
      <Toaster />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-900 sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-text-800 max-w-[600px]">
              {t("subtitle")}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="block pl-4 text-sm font-medium text-text-900"
              >
                {t("form.name")}
              </label>
              <input
                ref={nameInput}
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border bg-background-100 rounded-full border-background-200 shadow-sm py-3 px-5 outline-none focus:border-primary-400 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="block pl-4 text-sm font-medium text-text-900"
              >
                {t("form.email")}
              </label>
              <input
                ref={emailInput}
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border bg-background-100 rounded-full border-background-200 shadow-sm py-3 px-5 outline-none focus:border-primary-400 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-900"
              >
                {t("form.message")}
              </label>
              <textarea
                ref={messageInput}
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full min-h-12 max-h-44 bg-background-100 border-background-200 rounded-3xl outline-none border py-3 px-5 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex justify-center rounded-full border border-transparent bg-primary-700 py-2 px-4 text-sm text-text-50 font-semibold shadow-sm hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin -ml-1 mr-3 h-5 w-5 text-white border-t-2 border-white rounded-full"></div>
                  {t("form.sending")}
                </>
              ) : (
                t("form.send")
              )}
            </button>
          </form>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-900">
              {t("details.title")}
            </h3>
            <div className="flex items-center gap-6 text-text-600">
              <FaLocationDot className="h-5 w-5" />
              <span>
                Address Immeubles Coralia, 2ème étage, ISLAN, Hay Mohammadi,
                AGADIR
              </span>
            </div>
            <div className="flex items-center gap-6 text-text-600">
              <FaPhone className="h-5 w-5" />
              <span>Tel : +212666 885 219 // +212 663 235 853 </span>
            </div>
            <div className="flex items-center gap-6 text-text-600">
              <FaEnvelope className="h-5 w-5" />
              <span>oceansportours@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center lg:pt-16 justify-center relative h-[400px]">
          <MyMap />
        </div>
      </div>
    </section>
  );
}
