"use client"; // Ajout nécessaire pour exécuter useRouter côté client

import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface BackButtonProps {
  children?: ReactNode;
  href: string;
}

function BackButton({ children , href }: BackButtonProps) {
  const router = useRouter();
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Vérifier si la langue actuelle est RTL
    setIsRTL(document.documentElement.dir === "rtl");
  }, []);

  // Gérer le clic sur le bouton de retour


  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
    href={href}
    onClick={handleClick}
    className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2 rtl:gap-reverse 
               transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 active:opacity-80"
  >
    {/* Icône SVG avec animation */}
    <span className="transition-transform duration-300 group-hover:-translate-x-1 rtl:group-hover:translate-x-1">
      {isRTL ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      )}
    </span>

    <span>{children}</span>
  </a>

  );
}

export default BackButton;
