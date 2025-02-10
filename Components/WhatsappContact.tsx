"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappContact() {
  return (
    <div>
      <motion.div
        initial={{ width: "3.4rem", height: "3.4rem" }}
        whileHover={{ width: "10rem", height: "3.4rem" }}
        className="fixed overflow-hidden bottom-0 z-50 left-0 text-xl m-5 p-4 rounded-full border flex gap-2 border-green-950 border-opacity-15 shadow-lg active:shadow-sm text-white bg-green-500 hover:bg-opacity-80 items-center active:bg-background-300 hover:bg-green-600 transition duration-300"
      >
        <Link
          className="w-full h-full gap-6 flex items-center justify-start"
          href="https://whatsapp.com"
          target="_blank"
        >
          <FaWhatsapp size={25} className="block" />
          <h1 className="text-sm left-16 absolute">Whatsapp</h1>
        </Link>
      </motion.div>
    </div>
  );
}

export default WhatsappContact;
