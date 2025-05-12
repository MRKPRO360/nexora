'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { IDropdownProps } from '@/types/dropdown';

export default function Dropdown({
  title,
  items,
  icon,
  className = '',
}: IDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openTimeout = useRef<NodeJS.Timeout | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`relative ${className}`}
      ref={dropdownRef}
      onMouseEnter={() => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        openTimeout.current = setTimeout(() => setIsOpen(true), 150);
      }}
      onMouseLeave={() => {
        if (openTimeout.current) clearTimeout(openTimeout.current);
        closeTimeout.current = setTimeout(() => setIsOpen(false), 200);
      }}
    >
      <button
        type="button"
        className={`flex items-center justify-between w-full  text-sm font-medium rounded-lg transition-all duration-200 ${
          isOpen
            ? 'bg-gray-100 text-gray-900'
            : 'text-gray-700  hover:text-gray-900'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center gap-2">
          {icon && <span className="w-5 h-5">{icon}</span>}
          {title}
        </div>
        <FaChevronDown
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown menu with enter/exit animations */}
      {isOpen && (
        <div
          className="absolute z-10 w-full mt-1 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 ${
                  index !== items.length - 1 ? 'border-b border-gray-100' : ''
                } hover:bg-gray-50 `}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <span className="mr-2 w-5 h-5">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
