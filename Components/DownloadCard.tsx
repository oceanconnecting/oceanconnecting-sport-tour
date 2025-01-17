"use client"

import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaFilePdf } from "react-icons/fa6";
import { useTranslations } from "next-intl";

interface DownloadCardProps {
  title: string
  description: string
  fileSize: string
  downloadUrl: string
}

export default function DownloadCard({ title, description, fileSize, downloadUrl }: DownloadCardProps) {
    const t = useTranslations("homepage.downloads")
  return (
    <div className="w-full max-w-sm rounded-3xl border border-black border-opacity-15 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <FaFilePdf className="h-6 w-6 text-primary-300" />
          <h2 className="text-xl font-semibold text-text-200">{title}</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">File size: {fileSize}</p>
      </div>
      <div className="px-5 py-4">
        <button 
          className="w-full bg-black gap-2 hover:bg-primary-100 text-text-950 font-semibold py-3 px-5 rounded-full flex items-center justify-center transition duration-300 ease-in-out"
          onClick={() => window.open(downloadUrl, '_blank')}
        >
          <PiDownloadSimpleBold  className="h-4 w-4" />
          {t("button")}
        </button>
      </div>
    </div>
  )
}

