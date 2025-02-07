"use client"

import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoMdDownload } from "react-icons/io";
import { useTranslations } from "next-intl";
import Button from "./Button";

interface DownloadCardProps {
  title: string
  description: string
  fileSize: string
  downloadUrl: string
}

export default function DownloadCard({ title, description, fileSize, downloadUrl }: DownloadCardProps) {
    const t = useTranslations("homepage.downloads")
  return (
    <div className="w-full p-2 max-w-md rounded-2xl shadow-lg border border-background-200 bg-background-100 overflow-hidden">
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <IoMdDownload className="h-6 w-6 text-background-600" />
          <h2 className="text-xl font-bold text-text-800">{title}</h2>
        </div>
        <p className="text-text-600 text-sm mb-2">{description}</p>
        <p className="text-sm text-text-500">File size: {fileSize}</p>
      </div>
      <div className="px-5 mb-4">
        <Button
          variant="primary" 
          onClick={() => window.open(downloadUrl, '_blank')}
        >
          <PiDownloadSimpleBold  className="h-4 w-4" />
          {t("button")}
        </Button>
      </div>
    </div>
  )
}

