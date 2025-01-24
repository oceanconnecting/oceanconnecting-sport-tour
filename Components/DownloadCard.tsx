"use client"

import { PiDownloadSimpleBold } from "react-icons/pi";
import { CiFileOn } from "react-icons/ci";
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
    <div className="w-full max-w-sm rounded-xl border border-black border-opacity-15 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <CiFileOn className="h-6 w-6 text-primary-300" />
          <h2 className="text-xl font-semibold text-text-200">{title}</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">File size: {fileSize}</p>
      </div>
      <div className="px-5 py-4">
        <button 
          className="inline-flex justify-center rounded-full border border-transparent bg-primary-300 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-300 items-center gap-3 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => window.open(downloadUrl, '_blank')}
        >
          <PiDownloadSimpleBold  className="h-4 w-4" />
          {t("button")}
        </button>
      </div>
    </div>
  )
}

