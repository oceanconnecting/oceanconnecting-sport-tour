'use client';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { IoMdClose } from "react-icons/io";
interface ModalDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    descr: string;
    image?: string;
  };
}

export default function PlacesDetail({ isOpen, onClose, data }: ModalDetailProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
          <DialogPanel className="relative bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full">
            
          <div className="px-4 py-2 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full justify-center  px-0  py-0 text-sm font-medium text-black shadow-sm sm:ml-3 sm:w-auto"
              >
                <IoMdClose />
              </button>
            </div>



            {/* Image */}
            {data.image && (
              <div className="h-48 w-full bg-cover " style={{ backgroundImage: `url(${data.image})` }} />
            )}
            {/* Content */}
            <div className="px-4 py-5 sm:p-6">
              <DialogTitle className="text-lg font-medium text-gray-900">{data.title}</DialogTitle>
              <p className="mt-2 text-sm text-gray-500">{data.descr}</p>
            </div>
            {/* Actions */}
            {/* <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div> */}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
