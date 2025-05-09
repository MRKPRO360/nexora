import { useEffect, useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('English');
  const [selectedLang, setSelectedLang] = useState('English');

  const flipLang = (x) => (x === 'English' ? 'Bangla' : 'English');

  const toggleDropdown = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleLang = () => {
    const flipped = flipLang(lang);
    setLang(flipped);

    const selectedFlipLang = flipLang(flipped);
    setSelectedLang(selectedFlipLang);
  };
  console.log({ lang, selectedLang });

  useEffect(() => {
    console.log(selectedLang + ' i am running');
  }, [selectedLang]);
  return (
    <div className="absolute right-0">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium text-texLight"
      >
        {selectedLang}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-[max-content] right-0  bg-white rounded-sm shadow-lg ">
          <a
            onClick={() => handleLang()}
            onBlur={toggleDropdown}
            href="#"
            className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            {lang}
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
