import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Logo from '../../img/Logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClasses = (isActive) =>
    isActive
      ? 'text-background underline text-text px-1 pt-1 text-md font-medium transition duration-300 ease-in-out'
      : 'text-text px-1 pt-1 text-md font-medium transition duration-300 ease-in-out hover:text-background hover:underline';

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="h-9 w-auto" src={Logo} tabIndex="-1" alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => getLinkClasses(isActive)}>
              Home
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => getLinkClasses(isActive)}>
              Blog
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => getLinkClasses(isActive)}>
              About
            </NavLink>
           
            <NavLink to="/contacts" className={({ isActive }) => getLinkClasses(isActive)}>
              Contacts
            </NavLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-text-light-grey hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
              <NavLink to="/" className={({ isActive }) => getLinkClasses(isActive)}>
                Home
              </NavLink>
              <NavLink to="/blog" className={({ isActive }) => getLinkClasses(isActive)}>
              Blog
            </NavLink>
              <NavLink to="/about" className={({ isActive }) => getLinkClasses(isActive)}>
                About
              </NavLink>
            
              <NavLink to="/contacts" className={({ isActive }) => getLinkClasses(isActive)}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
}

export default Header;
