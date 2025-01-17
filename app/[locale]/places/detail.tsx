'use client';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { IoMdClose } from "react-icons/io";
import Button from '@/Components/Button';
import { useLocale } from 'next-intl';


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
  const locale=useLocale();
  function t(arg0: string): import("react").ReactNode {
    throw new Error('Function not implemented.');
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
      <div className="fixed inset-0 z-10 overflow-y-auto contact">
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
           <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              
              <Button  type="button"
                onClick={onClose}
                className=" dark:hover:bg-[#050708]/30 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-black-600 
                inline-flex w-full justify-center  bg-black-600    text-white shadow-sm 0 sm:ml-3 sm:w-auto"
               href={`/${locale}/contact`} variant="dark_primary">
            contact
          </Button>
            </div> 
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
