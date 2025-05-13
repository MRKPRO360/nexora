'use client';
import { GoSearch, GoHeart } from 'react-icons/go';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import NavLink from '../utils/NavLink';
import SmallNav from '../utils/SmallNav';
import ExSheet from '../utils/EXSheet';
import Link from 'next/link';
import { TbCategory2 } from 'react-icons/tb';
import SideNav from '../module/home/HomeBanner/SideNav';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsCategoryOpen((prev) => !prev);

  const toggleSidebar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/contact', text: 'Contact' },
    { path: '/about', text: 'About' },
    { path: '/sign-up', text: 'Sign Up' },
  ];

  //  CLOSING DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <SmallNav />
      <nav className="py-2 text-black transition-colors duration-300 border-b-2 mt-8 border-b-secondary px-2 2xl:px-0 ">
        <div className="max-w-[1170px] mx-auto px-4 2xl:px-0 flex flex-wrap items-center justify-between ">
          <h1 className="hidden text-2xl font-semibold md:block">Exclusive</h1>

          {/* HAMBURGER MENU */}
          <button
            className="text-xl cursor-pointer md:hidden"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* DESKTOP NAVIGATION */}
          <ul className="items-center justify-between hidden gap-12 list-none md:flex">
            {navItems.map((el, i) => (
              <NavLink
                href={el.path}
                className="border-b-transparent"
                activeClassName="border-b-bgDark"
                //   className={({ isActive }) =>
                //     isActive
                //       ? 'border-b-2 border-b-bgDark transition duration-300'
                //       : 'border-b-2 border-b-transparent'
                //   }
                key={i}
              >
                {el.text}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center justify-between w-full gap-6 mt-3 lg:mt-0 lg:w-auto flex-wrap ">
            {
              <div ref={dropdownRef} className="relative order-1 sm:order-0">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-1 py-1 px-2 lg:hidden bg-tertiary text-bgLight rounded-md cursor-pointer"
                >
                  <TbCategory2 />
                  <span>Categories</span>
                </button>

                {isCategoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[240px] p-4 mx-auto z-50 rounded-md overflow-hidden bg-white shadow-md">
                    <SideNav />
                  </div>
                )}
              </div>
            }
            <div className="relative mr-auto order-3 sm:order-0 w-full sm:w-auto bg-secondaryPink">
              <input
                className="block pl-5 pr-3 py-[7px] rounded-md  placeholder:text-xs placeholder:text-textGray outline-none transition duration-300 focus:ring-1 focus:ring-textDark text-textDark text-md
              sm:w-96 md:w-[450px] lg:w-auto
              "
                type="text"
                placeholder="What are you looking for?"
              />
              <GoSearch className="absolute  right-3 top-[25%] text-2xl" />
            </div>

            <div className="order-2 flex items-center gap-4 sm:order-0 ">
              <GoHeart className="text-2xl" />
              <ExSheet />
              <Link href="/addProduct">
                <FaUser className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR ITEMS */}
      <div
        // className={`fixed top-0 left-0 h-full w-64 bg-bgLight dark:bg-bgDark dark:text-textLight transform ${
        className={`fixed top-0 left-0 h-full w-64 bg-bgDark transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden z-50`}
      >
        <button
          className="absolute text-xl top-4 right-4 text-primaryLight cursor-pointer"
          onClick={toggleSidebar}
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>
        <ul className="flex flex-col items-start gap-6 p-6 mt-10">
          {navItems.map((item, index) => (
            <NavLink
              href={item.path}
              key={index}
              className="text-textGray hover:text-primaryDark"
              activeClassName="font-semibold text-primaryLight"
              toggleSidebar={toggleSidebar} // Close sidebar on click
              //   className={({ isActive }) =>
              //     isActive
              //       ? 'dark:text-textLight text-primaryDark font-semibold'
              //       : ' text-textGray hover:text-primaryDark'
              //   }
            >
              {item.text}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
