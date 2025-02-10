"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

function WhatsappContact() {
  const t = useTranslations("contact");
  return (
    <div>
      <motion.div
        initial={{ width: "3rem", height: "3rem" }}
        whileHover={{ width: "8.69rem", height: "3rem" }}
        className="fixed overflow-hidden z-50 bottom-5 left-5 text-xl rounded-full flex shadow-lg active:shadow-sm text-white bg-green-500 hover:bg-opacity-80 items-center active:bg-background-300 hover:bg-green-600 transition duration-300"
      >
        <Link
          className="w-full h-full gap-6 flex items-center justify-start"
          href="https://wa.me/+212704309787?text=Hi%20*oceanconnecting*!%20I%20need%20more%20info%20about%20oceanconnecting%20https%3A%2F%2Foceanconnecting.ma"
          target="_blank"
        >
          <FaWhatsapp size={25} className="left-3 absolute" />
          <h1 className="text-sm left-12 absolute text-nowrap">Whatsapp</h1>
        </Link>
      </motion.div>
    </div>
  );
}

export default WhatsappContact;
