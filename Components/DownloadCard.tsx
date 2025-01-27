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
    <div className="w-full max-w-sm rounded-3xl bg-primary-950 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <CiFileOn className="h-6 w-6 text-primary-300" />
          <h2 className="text-xl font-bold text-text-200">{title}</h2>
        </div>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-sm text-gray-500">File size: {fileSize}</p>
      </div>
      <div className="px-5 mb-4">
        <button 
          className="flex gap-2 items-center py-3 px-5 rounded-2xl border-t shadow-md active:shadow-sm border-primary-600 focus:outline outline-primary-400/50 text-white bg-primary-500 active:bg-primary-300 hover:bg-primary-400 transition duration-300"
          onClick={() => window.open(downloadUrl, '_blank')}
        >
          <PiDownloadSimpleBold  className="h-4 w-4" />
          {t("button")}
        </button>
      </div>
    </div>
  )
}

