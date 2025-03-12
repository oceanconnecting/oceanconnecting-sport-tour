"use client"; // Ajout nécessaire pour exécuter useRouter côté client

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface BackButtonProps {
  children?: ReactNode;
  href: string;
}

function BackButton({ children = "Go Back", href }: BackButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className="text-blue-500 hover:underline">
      {children}
    </a>
  );
}

export default BackButton;
