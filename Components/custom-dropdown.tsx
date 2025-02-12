"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  onSelect: (option: DropdownOption) => void;
  placeholder?: string;
}

export default function CustomDropdown({
  options,
  onSelect,
  placeholder,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const isRTL = locale === "ar";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative inline-block text-left w-full sm:w-64"
      dir={isRTL ? "rtl" : "ltr"}
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className={`inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronDown
            className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"} ${
              isOpen ? "transform rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        className={`absolute ${
          isRTL ? "right-0" : "left-0"
        } bottom-full mb-1 w-full sm:w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1 pointer-events-none"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <button
              key={option.value}
              className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                isRTL ? "text-right" : "text-left"
              }`}
              role="menuitem"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
