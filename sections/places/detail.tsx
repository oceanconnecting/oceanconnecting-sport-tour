"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import Button from "@/Components/Button";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

interface ModalDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    descr: string;
    image?: string;
  };
}

export default function PlacesDetail({
  isOpen,
  onClose,
  data,
}: ModalDetailProps) {
  const locale = useLocale();

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="flex flex-row relative z-11 w-full"
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-10 h-full"
          key="modal"
        >
          <DialogBackdrop className="fixed w-screen inset-0 bg-background-100/75" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="flex items-center justify-center w-full px-6 pt-11 inset-0 z-10 overflow-y-auto h-full"
          >
            <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
              <DialogPanel className="relative h-fit bg-white rounded-lg shadow-xl sm:max-w-4xl lg:max-w-5xl w-full">
                {/* Close Button */}
                <div className="px-6 py-6 flex justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex h-fit justify-center px-0 py-0 text-2xl font-bold text-black sm:ml-3 sm:w-auto"
                  >
                    <IoMdClose />
                  </button>
                </div>

                {/* Image */}
                {data.image && (
                  <div
                    className="h-64 mx-16 rounded-lg inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.image})` }}
                  />
                )}

                {/* Content */}
                <div className="px-6 pt-5 sm:p-6">
                  <DialogTitle className="text-lg font-bold text-gray-900">
                    {data.title}
                  </DialogTitle>
                  <p className="mt-2 text-sm font-medium text-black-900">
                    {data.descr}
                  </p>
                </div>

                {/* Actions */}
                <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <Button
                    type="button"
                    onClick={onClose}
                    className="dark:hover:bg-[#050708]/30 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-black-600 inline-flex w-full justify-center bg-black-600 text-white shadow-sm sm:ml-3 sm:w-auto"
                    href={`/${locale}/contact`}
                    variant="primary"
                  >
                    Contact
                  </Button>
                </div>
              </DialogPanel>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Dialog>
  );
}
