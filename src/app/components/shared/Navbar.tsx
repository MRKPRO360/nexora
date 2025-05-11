'use client';
import { GoSearch, GoHeart } from 'react-icons/go';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import NavLink from '../utils/NavLink';
import SmallNav from '../utils/SmallNav';
import ExSheet from '../utils/EXSheet';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/contact', text: 'Contact' },
    { path: '/about', text: 'About' },
    { path: '/sign-up', text: 'Sign Up' },
  ];

  return (
    <div>
      <SmallNav />
      <nav className="py-2 mb-4 text-black transition-colors duration-300 border-b-2 mt-8 border-b-secondary px-2 2xl:px-0">
        <div className="max-w-[1545px] mx-auto flex flex-wrap items-center justify-between ">
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

          <div className="flex items-center justify-between w-full gap-6 mt-3 lg:mt-0 lg:w-auto">
            <div className="relative mr-auto">
              <input
                className="block pl-5 pr-3 py-[7px] rounded-md bg-secondaryPink placeholder:text-xs placeholder:text-textGray outline-none transition duration-300 focus:ring-1 focus:ring-textDark text-textDark text-md
              sm:w-96 md:w-[450px] lg:w-auto
              "
                type="text"
                placeholder="What are you looking for?"
              />
              <GoSearch className="absolute right-3 top-[25%] text-2xl" />
            </div>

            <div className="flex items-center gap-4 ">
              <GoHeart className="text-2xl" />
              <ExSheet />
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
