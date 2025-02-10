"use client";

import { useRef, useState } from "react";
import { FaRegImages } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

function ModalServices(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const { title, image, Images, descr } = props;

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden w-full min-w-sm h-64 rounded-lg shadow-lg cursor-pointer"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 z-10" />
        <div className="relative h-full flex flex-col justify-end z-10">
          <div className="px-6 py-3 flex justify-center flex-col gap-2">
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-sm text-white">{descr}</p>
          </div>
        </div>
      </div>
      <Lightbox
        plugins={[Thumbnails, Counter]}
        close={() => setIsOpen(false)}
        open={isOpen}
        slides={Images}
      />
    </div>
  );
}

export default ModalServices;
