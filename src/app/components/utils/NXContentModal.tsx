import { ReactNode, useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const NXContentModal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'md',
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // const sizeClasses = {
  //   sm: 'max-w-sm',
  //   md: 'max-w-md',
  //   lg: 'max-w-lg',
  //   xl: 'max-w-2xl',
  // };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-gray-50/10 backdrop-blur-sm">
      <div
        ref={modalRef}
        className={`relative w-full max-w-xl lg:max-w-2xl bg-white rounded-sm shadow-md overflow-hidden animate-fadeIn max-h-[80vh] overflow-y-auto`}
      >
        {/* Header with close button */}
        <div className="flex justify-end  bg-white ">
          {title && (
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            className=" p-2 m-2 text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>

        {/* Content passed from parent */}
        <div className="p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
};
