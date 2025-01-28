import type React from "react"
import { useState, useRef, useEffect } from "react"
import { CiGlobe } from "react-icons/ci";

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  options: Option[]
  placeholder?: string
  onChange: (selectedOption: Option) => void
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, placeholder = "Select an option", onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleToggle = () => setIsOpen(!isOpen)

  const handleSelect = (option: Option) => {
    setSelectedOption(option)
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div className="relative w-12" ref={dropdownRef}>
      <button
        type="button"
        className="w-fit flex items-center justify-center gap-1 px-1 py-2"
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        >
        <CiGlobe/>
        {selectedOption ? selectedOption.label : placeholder}
      </button>
      {isOpen && (
        <ul
          className="absolute gap-1 flex flex-col z-50 w-full py-1 mt-1 overflow-auto bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`${
                selectedOption?.value === option.value ? "text-text-100 mx-1 rounded-lg bg-primary-900" : "text-gray-900"
              } cursor-pointer select-none text-center relative py-2 mx-1 rounded-lg hover:bg-primary-950`}
              role="option"
              aria-selected={selectedOption?.value === option.value}
              onClick={() => handleSelect(option)}
            >
              <span className="block truncate">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect

