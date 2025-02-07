"use client"
import { motion } from 'motion/react';
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";

function WhatsappContact() {
  return (
    <div>
        <div
        className="fixed overflow-hidden bottom-0 z-50 left-0 text-xl m-5 p-4 rounded-full border flex gap-2 border-green-950 border-opacity-15 shadow-lg active:shadow-sm text-white bg-green-500 hover:bg-opacity-80 items-center active:bg-background-300 hover:bg-green-400 transition duration-300">
            <Link href="https://whatsapp.com" target="_blank">
                <FaWhatsapp/>
            </Link>
        </div>
    </div>
  )
}

export default WhatsappContact